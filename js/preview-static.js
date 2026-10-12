const faqContent=[{"q":"Preciso saber alguma coisa de elétrica pra montar?","a":"Não. A apostila ensina do zero, sem termo técnico complicado."},{"q":"Funciona mesmo em dias nublados?","a":"Sim. A apostila ensina a calcular a autonomia do sistema e o banco de baterias certo pra você ter energia mesmo nos dias sem sol."},{"q":"É seguro fazer sozinho, sem eletricista?","a":"A apostila mostra passo a passo o uso correto de disjuntores, DPS, aterramento e cabos dimensionados, que são os cuidados que deixam a instalação segura. Em caso de dúvida em alguma etapa, sempre vale consultar um profissional."},{"q":"Preciso comprar bateria de lítio?","a":"Não. Você vai aprender a montar seu sistema com bateria comum, que custa muito menos."},{"q":"Se eu não gostar, posso pedir reembolso?","a":"Sim. Você tem 7 dias de garantia. Se não gostar, devolvemos 100% do seu dinheiro."}];

document.querySelectorAll('button').forEach((button,index)=>{
 const item=faqContent.find(item=>button.querySelector('span')?.textContent.trim()===item.q);
 if(!item)return;
 const box=button.parentElement;
 let answer=box.querySelector('p');
 const visible=Boolean(answer);
 if(!answer){answer=document.createElement('p');answer.className='px-5 pb-5 text-sm leading-relaxed text-body';box.append(answer);}
 answer.textContent=item.a;
 answer.id='faq-answer-'+index;
 answer.hidden=!visible;
 button.setAttribute('aria-controls',answer.id);
 button.setAttribute('aria-expanded',String(visible));
 button.addEventListener('click',()=>{
  const open=button.getAttribute('aria-expanded')==='true';
  faqContent.forEach(item=>{
   document.querySelectorAll('button[aria-controls]').forEach(other=>{
    other.setAttribute('aria-expanded','false');
    document.getElementById(other.getAttribute('aria-controls')).hidden=true;
    const icon=other.querySelector('svg');if(icon)icon.innerHTML='<path d="M5 12h14"></path><path d="M12 5v14"></path>';
   });
  });
  if(!open){answer.hidden=false;button.setAttribute('aria-expanded','true');const icon=button.querySelector('svg');if(icon)icon.innerHTML='<path d="M5 12h14"></path>';}
 });
});
