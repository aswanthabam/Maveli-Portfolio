(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const s of c.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerPolicy&&(c.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?c.credentials="include":e.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(e){if(e.ep)return;e.ep=!0;const c=u(e);fetch(e.href,c)}})();let i=0,r=null,t=null;function y(){try{var n=window.screen.width;r=n>767?document.querySelectorAll(".activities-path")[0]:document.querySelectorAll(".activities-path")[1],console.log(r),i=r.getTotalLength(),r.style.strokeDasharray=i+" "+i,r.style.strokeDashoffset=i}catch(l){console.log(l)}}window.onload=()=>{y()};document.getElementById("menu-btn").onclick=function(){document.getElementsByClassName("sidemenu")[0].style.left="0px"};document.getElementById("menu-btn-close").onclick=function(){document.getElementsByClassName("sidemenu")[0].style.left="-100%"};window.onscroll=n=>{window.scrollY>screen.height/2?(document.getElementsByClassName("topbar")[0].classList.add("scrolled"),document.getElementsByClassName("topbar")[1].classList.add("scrolled")):(document.getElementsByClassName("topbar")[0].classList.remove("scrolled"),document.getElementsByClassName("topbar")[1].classList.remove("scrolled"));try{if(document.querySelector(".activities").getBoundingClientRect().top<=document.querySelector(".activities").getBoundingClientRect().height/5){var l=(-1*document.querySelector(".activities").getBoundingClientRect().top+document.querySelector(".activities").getBoundingClientRect().height/5)/document.querySelector(".activities").getBoundingClientRect().height,u=i*l;r.style.strokeDashoffset=i-u;var o=document.querySelector(".activities .content").getBoundingClientRect().top*-1/document.querySelector(".activities .content").getBoundingClientRect().height*100;o>=50?((t>767?document.querySelectorAll(".activity4")[0]:document.querySelectorAll(".activity4")[1]).style.opacity=1,(t>767?document.querySelectorAll(".circle4")[0]:document.querySelectorAll(".circle4")[1]).style.opacity=1):((t>767?document.querySelectorAll(".activity4")[0]:document.querySelectorAll(".activity4")[1]).style.opacity=0,(t>767?document.querySelectorAll(".circle4")[0]:document.querySelectorAll(".circle4")[1]).style.opacity=0),o>=30?((t>767?document.querySelectorAll(".activity3")[0]:document.querySelectorAll(".activity3")[1]).style.opacity=1,(t>767?document.querySelectorAll(".circle3")[0]:document.querySelectorAll(".circle3")[1]).style.opacity=1):((t>767?document.querySelectorAll(".activity3")[0]:document.querySelectorAll(".activity3")[1]).style.opacity=0,(t>767?document.querySelectorAll(".circle3")[0]:document.querySelectorAll(".circle3")[1]).style.opacity=0),o>=0?((t>767?document.querySelectorAll(".activity2")[0]:document.querySelectorAll(".activity2")[1]).style.opacity=1,(t>767?document.querySelectorAll(".circle2")[0]:document.querySelectorAll(".circle2")[1]).style.opacity=1):((t>767?document.querySelectorAll(".activity2")[0]:document.querySelectorAll(".activity2")[1]).style.opacity=0,(t>767?document.querySelectorAll(".circle2")[0]:document.querySelectorAll(".circle2")[1]).style.opacity=0),o>=-20?((t>767?document.querySelectorAll(".activity1")[0]:document.querySelectorAll(".activity1")[1]).style.opacity=1,(t>767?document.querySelectorAll(".circle1")[0]:document.querySelectorAll(".circle1")[1]).style.opacity=1):((t>767?document.querySelectorAll(".activity1")[0]:document.querySelectorAll(".activity1")[1]).style.opacity=0,(t>767?document.querySelectorAll(".circle1")[0]:document.querySelectorAll(".circle1")[1]).style.opacity=0)}}catch(e){console.log(e)}};
