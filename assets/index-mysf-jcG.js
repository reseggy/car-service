const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BAK503uC.js","assets/index-B3KqFI9q.js","assets/index-pVZN_qRH.css","assets/car-for-sale-CGm5QAIX.js","assets/slick-theme-WYFhvZZk.js","assets/slick-theme-BZEvA-MV.css","assets/car-for-sale-Dl2EA1B6.css","assets/preloader-DQNr2Dr9.js","assets/preloader-C5vrg3yW.css","assets/index-BhW7L3ct.css"])))=>i.map(i=>d[i]);
import{r as e,_ as c,a as i,b as l,f as n,j as a}from"./index-B3KqFI9q.js";import{P as p}from"./preloader-DQNr2Dr9.js";const d={},f=e.lazy(()=>c(()=>import("./index-BAK503uC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(s=>({default:s.SaleCars}))),x=()=>{const s=i(),{cars:r,isLoading:t}=l(o=>o.cars);return e.useEffect(()=>{s(n())},[s]),a.jsx("div",{className:d.page,children:a.jsx(e.Suspense,{fallback:a.jsx(p,{}),children:a.jsx(f,{items:r,isLoading:t})})})};export{x as SaleCarsPage};