(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();"service-worker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(o=>console.log("service worker registered")).catch(o=>console.log("service worker not registered",o))});const p=document.documentElement,m=document.querySelector(".header-container"),f=document.querySelector(".header-title"),c=document.querySelector(".toggle-input"),h=document.querySelector(".toggle-label");document.querySelector(".sphere-container");const r=document.querySelector(".sphere"),n=document.querySelector(".caption"),a=document.querySelector("#gong"),b=document.querySelector(".btn-container"),y=document.querySelector(".reset-btn"),d=document.querySelector("footer"),v=document.querySelector(".footer-link"),g=()=>{r.style.animation="paused",n.style.setProperty("--animation-name","paused"),a.pause(),a.currentTime=0};c.addEventListener("click",()=>{const o="#eee",s="#222",u="#13eb86",l="#1693e6",e="#ff7c7c",t="#1c0d0d",i="#d85349",k="#330801";c.checked&&(c.checked=!0,p.style.backgroundColor=t,f.style.color=e,h.style.backgroundColor=e,r.style.setProperty("--sphere-gradient-colors",`radial-gradient(circle, ${i}, ${k})`),n.style.color=e,y.style.color=e,d.style.color=e,v.style.color=e,g()),c.checked||(c.checked=!1,p.style.backgroundColor=s,f.style.color=o,h.style.backgroundColor=o,r.style.setProperty("--sphere-gradient-colors",`radial-gradient(circle, ${u}, ${l})`),n.style.color=o,y.style.color=o,d.style.color=o,v.style.color=o,g())});r.addEventListener("click",()=>{r.dataset.state==="stop"?(m.setAttribute("style","visibility: hidden"),b.setAttribute("style","visibility: hidden"),d.setAttribute("style","visibility: hidden"),r.dataset.state="play",r.style.animation="breath 11s infinite ease-in-out running",n.style.setProperty("--animation-name","sphere-caption"),n.style.setProperty("--animation","running"),a.play()):r.dataset.state==="play"&&(m.setAttribute("style","visibility: visible"),b.setAttribute("style","visibility: visible"),d.setAttribute("style","visibility: visibility"),r.dataset.state="stop",r.style.animationPlayState="paused",n.style.setProperty("--animation","paused"),a.pause())});y.addEventListener("click",()=>g());
