(()=>{'use strict';
const $=id=>document.getElementById(id), cfg=window.EXAM_CONFIG;
if(!cfg || !Array.isArray(cfg.institutions)){document.body.textContent='Configuratie ontbreekt of is ongeldig.';return;}
const settings={inactivitySeconds:180,warningSeconds:30,confirmBeforeExam:true,...cfg.settings};
let step=0,selected=null,accepted=false,pending=null,lastActivity=Date.now(),warningShown=false;
const content=$('content'), dialog=$('confirm-dialog');
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
function button(text,fn,secondary=false){const b=el('button','btn'+(secondary?' secondary':''),text);b.type='button';b.addEventListener('click',fn);return b;}
function heading(title,sub){content.append(el('h1','',title),el('p','sub',sub));}
function home(){if(dialog.open)dialog.close();pending=null;step=0;selected=null;accepted=false;warningShown=false;lastActivity=Date.now();render();}
function goto(s){step=s;lastActivity=Date.now();warningShown=false;render();}
function urlFor(exam){try{const u=new URL(exam.url);return ['http:','https:'].includes(u.protocol)?u:null;}catch{return null;}}
function openExam(exam,url){pending={exam,url};if(settings.confirmBeforeExam && typeof dialog.showModal==='function'){$('dialog-message').textContent=`Je staat op het punt ${exam.name} te openen (${url.hostname}). Controleer of dit de juiste examenomgeving is.`;dialog.showModal();}else{if(window.confirm(`Open ${exam.name} (${url.hostname})?`))launch(exam,url);}}
function launch(exam,url){if(url.protocol==='http:'&&!window.confirm('Deze examenomgeving gebruikt HTTP en is niet versleuteld. Toch doorgaan?'))return;
  // Zelfde venster houdt ChromeOS-kioskcontext mogelijk intact; gedrag moet op Chromebook getest worden.
  window.location.assign(url.href);
}
$('cancel-exam').addEventListener('click',()=>{pending=null;dialog.close();});
$('start-exam').addEventListener('click',()=>{const p=pending;pending=null;dialog.close();if(p)launch(p.exam,p.url);});
$('home').addEventListener('click',home);
function render(){content.replaceChildren();$('step-label').textContent=`Stap ${step+1} van 3`;$('progress').style.width=`${(step+1)*100/3}%`;$('home').hidden=step===0;$('idle-warning').hidden=true;
if(step===0){heading('Welkom bij Exam Launcher','Selecteer je onderwijsinstelling');const grid=el('div','tiles');cfg.institutions.forEach(inst=>{const b=el('button','tile institution-tile');b.type='button';b.setAttribute('aria-label',inst.name);if(inst.logo){const img=el('img','institution-logo');img.src=inst.logo;img.alt=inst.name;b.append(img);}else b.append(el('span','exam-name',inst.name));b.addEventListener('click',()=>{selected=inst;accepted=false;goto(1);});grid.append(b);});content.append(grid);
}else if(step===1){heading('Examenregels',selected.name);const list=el('ol','rules');selected.rules.forEach(r=>list.append(el('li','',r)));content.append(list);const label=el('label','accept'),check=el('input');check.type='checkbox';check.checked=accepted;label.append(check,el('span','','Ik heb de examenregels gelezen en begrepen.'));content.append(label);const actions=el('div','actions'),next=button('Verder →',()=>goto(2));next.disabled=!accepted;check.addEventListener('change',()=>{accepted=check.checked;next.disabled=!accepted;});actions.append(button('← Terug',()=>goto(0),true),next);content.append(actions);
}else{heading('Selecteer je examenomgeving',selected.name);const grid=el('div','tiles');selected.exams.forEach(exam=>{const b=el('button','tile exam-tile');b.type='button';b.append(el('span','exam-logo',exam.logoText||'▣'),el('span','exam-name',exam.name));if(exam.note)b.append(el('small','exam-note',exam.note));const u=urlFor(exam);if(!u){b.disabled=true;b.title='Geen geldige URL ingesteld in config.js';}else b.addEventListener('click',()=>openExam(exam,u));grid.append(b);});content.append(grid);
const hint=el('p','hint','Na het openen van een examen kan deze launcher het examen niet automatisch afsluiten. Gebruik de afsluitfunctie van de examenomgeving of herstart de kiosk volgens de instructies van de surveillant.');if(settings.showSessionReturnHint)content.append(hint);
const actions=el('div','actions');actions.append(button('← Regels',()=>goto(1),true),button('⌂ Startscherm',home,true));content.append(actions);}}
function clock(){$('clock').textContent=new Date().toLocaleString('nl-NL',{weekday:'short',hour:'2-digit',minute:'2-digit'});}clock();setInterval(clock,30000);
for(const ev of ['pointerdown','keydown','touchstart','wheel'])document.addEventListener(ev,()=>{lastActivity=Date.now();warningShown=false;$('idle-warning').hidden=true;},{passive:true});
setInterval(()=>{const max=Number(settings.inactivitySeconds);if(!(max>0)||dialog.open)return;const remaining=Math.ceil(max-(Date.now()-lastActivity)/1000);if(remaining<=0){home();return;}const warn=Number(settings.warningSeconds);if(warn>0&&remaining<=warn&&step>0){$('idle-warning').textContent=`Geen activiteit. Terug naar het startscherm over ${remaining} seconden.`;$('idle-warning').hidden=false;}else $('idle-warning').hidden=true;},1000);
// Back-knop van browser: navigatie binnen launcher (niet gegarandeerd na externe navigatie).
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&dialog.open){dialog.close();pending=null;}});
render();
})();