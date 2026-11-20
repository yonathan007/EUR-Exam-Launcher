(()=>{'use strict';
const $=id=>document.getElementById(id), cfg=window.EXAM_CONFIG;
if(!cfg || !Array.isArray(cfg.institutions)){document.body.textContent='Configuratie ontbreekt of is ongeldig.';return;}
const settings={inactivitySeconds:180,warningSeconds:30,confirmBeforeExam:true,...cfg.settings};
let step=0,selected=null,accepted=false,pending=null,lastActivity=Date.now(),warningShown=false;
let lang=cfg.settings?.defaultLanguage==='en'?'en':'nl';
const strings={
 nl:{step:'Stap',of:'van',home:'⌂ Startscherm',welcome:'Welkom bij Exam Launcher',selectInstitution:'Selecteer je onderwijsinstelling',rules:'Examenregels',accept:'Ik heb de examenregels gelezen en begrepen.',next:'Verder →',back:'← Terug',chooseExam:'Selecteer je examenomgeving',rulesBack:'← Regels',startTitle:'Examenomgeving starten?',cancel:'Annuleren',open:'Examen openen',confirm:'Je staat op het punt {name} te openen ({host}). Controleer of dit de juiste examenomgeving is.',hint:'Na het openen van een examen kan deze launcher het examen niet automatisch afsluiten. Gebruik de afsluitfunctie van de examenomgeving of herstart de kiosk volgens de instructies van de surveillant.',idle:'Geen activiteit. Terug naar het startscherm over {seconds} seconden.',http:'Deze examenomgeving gebruikt een onbeveiligde HTTP-verbinding. Toch doorgaan?',missing:'Geen geldige URL ingesteld in config.js'},
 en:{step:'Step',of:'of',home:'⌂ Home',welcome:'Welcome to Exam Launcher',selectInstitution:'Select your institution',rules:'Exam rules',accept:'I have read and understood the examination rules.',next:'Continue →',back:'← Back',chooseExam:'Select your examination environment',rulesBack:'← Rules',startTitle:'Launch exam environment?',cancel:'Cancel',open:'Open examination',confirm:'You are about to open {name} ({host}). Check that this is the correct examination environment.',hint:'Once an examination is open, this launcher cannot close it automatically. Use the examination environment’s exit function or restart the kiosk according to the invigilator’s instructions.',idle:'No activity. Returning to the home screen in {seconds} seconds.',http:'This examination environment uses unencrypted HTTP. Continue anyway?',missing:'No valid URL configured in config.js'}
};
const t=(key,vars={})=>(strings[lang][key]||key).replace(/\{(\w+)\}/g,(_,k)=>String(vars[k]??''));
function setLanguage(value){if(value!== 'nl' && value!=='en')return;lang=value;document.documentElement.lang=lang;lastActivity=Date.now();warningShown=false;render();}
$('lang-nl').addEventListener('click',()=>setLanguage('nl'));
$('lang-en').addEventListener('click',()=>setLanguage('en'));
const content=$('content'), dialog=$('confirm-dialog');
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
function button(text,fn,secondary=false){const b=el('button','btn'+(secondary?' secondary':''),text);b.type='button';b.addEventListener('click',fn);return b;}
function heading(title,sub){content.append(el('h1','',title),el('p','sub',sub));}
function home(){if(dialog.open)dialog.close();pending=null;step=0;selected=null;accepted=false;warningShown=false;lastActivity=Date.now();render();}
function goto(s){step=s;lastActivity=Date.now();warningShown=false;render();}
function urlFor(exam){try{const u=new URL(exam.url);return ['http:','https:'].includes(u.protocol)?u:null;}catch{return null;}}
function openExam(exam,url){pending={exam,url};if(settings.confirmBeforeExam && typeof dialog.showModal==='function'){$('dialog-message').textContent=t('confirm',{name:exam.name,host:url.hostname});dialog.showModal();}else{if(window.confirm(t('confirm',{name:exam.name,host:url.hostname})))launch(exam,url);}}
function launch(exam,url){if(url.protocol==='http:'&&!window.confirm(t('http')))return;
  // Zelfde venster houdt ChromeOS-kioskcontext mogelijk intact; gedrag moet op Chromebook getest worden.
  window.location.assign(url.href);
}
$('cancel-exam').addEventListener('click',()=>{pending=null;dialog.close();});
$('start-exam').addEventListener('click',()=>{const p=pending;pending=null;dialog.close();if(p)launch(p.exam,p.url);});

function render(){content.replaceChildren();document.documentElement.lang=lang;$('step-label').textContent=`${t('step')} ${step+1} ${t('of')} 3`;$('dialog-title').textContent=t('startTitle');$('cancel-exam').textContent=t('cancel');$('start-exam').textContent=t('open');for(const code of ['nl','en']){$('lang-'+code).setAttribute('aria-pressed',String(code===lang));}$('progress').style.width=`${(step+1)*100/3}%`;$('idle-warning').hidden=true;
if(step===0){heading(t('welcome'),t('selectInstitution'));const grid=el('div','tiles');cfg.institutions.forEach(inst=>{const b=el('button','tile institution-tile');b.type='button';b.setAttribute('aria-label',inst.name);if(inst.logo){const img=el('img','institution-logo');img.src=inst.logo;img.alt=inst.name;b.append(img);}else b.append(el('span','exam-name',inst.name));b.addEventListener('click',()=>{selected=inst;accepted=false;goto(1);});grid.append(b);});content.append(grid);
}else if(step===1){heading(t('rules'),selected.name);const list=el('ol','rules');(Array.isArray(selected.rules)?selected.rules:(selected.rules[lang]||selected.rules.nl||[])).forEach(r=>list.append(el('li','',r)));content.append(list);const label=el('label','accept'),check=el('input');check.type='checkbox';check.checked=accepted;label.append(check,el('span','',t('accept')));content.append(label);const actions=el('div','actions'),next=button(t('next'),()=>goto(2));next.disabled=!accepted;check.addEventListener('change',()=>{accepted=check.checked;next.disabled=!accepted;});actions.append(button(t('back'),()=>goto(0),true),next);content.append(actions);
}else{heading(t('chooseExam'),selected.name);const grid=el('div','tiles');selected.exams.forEach(exam=>{const b=el('button','tile exam-tile');b.type='button';b.append(el('span','exam-logo',exam.logoText||'▣'),el('span','exam-name',exam.name));if(exam.note)b.append(el('small','exam-note',exam.note));const u=urlFor(exam);if(!u){b.disabled=true;b.title=t('missing');}else b.addEventListener('click',()=>openExam(exam,u));grid.append(b);});content.append(grid);
const hint=el('p','hint',t('hint'));if(settings.showSessionReturnHint)content.append(hint);
const actions=el('div','actions');actions.append(button(t('rulesBack'),()=>goto(1),true),button(t('home'),home,true));content.append(actions);}}
function clock(){$('clock').textContent=new Date().toLocaleString(lang==='nl'?'nl-NL':'en-GB',{weekday:'short',hour:'2-digit',minute:'2-digit'});}clock();setInterval(clock,30000);
for(const ev of ['pointerdown','keydown','touchstart','wheel'])document.addEventListener(ev,()=>{lastActivity=Date.now();warningShown=false;$('idle-warning').hidden=true;},{passive:true});
setInterval(()=>{const max=Number(settings.inactivitySeconds);if(!(max>0)||dialog.open)return;const remaining=Math.ceil(max-(Date.now()-lastActivity)/1000);if(remaining<=0){home();return;}const warn=Number(settings.warningSeconds);if(warn>0&&remaining<=warn&&step>0){$('idle-warning').textContent=t('idle',{seconds:remaining});$('idle-warning').hidden=false;}else $('idle-warning').hidden=true;},1000);
// Back-knop van browser: navigatie binnen launcher (niet gegarandeerd na externe navigatie).
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&dialog.open){dialog.close();pending=null;}});
render();
})();