import{_ as i,r as c,A as f,o as d,c as o,d as s,t as p,j as _,B as m,m as v,s as y,n as b}from"./index-BI4Svtlu.js";const g={props:{label:{type:String,required:!0},id:{type:String,required:!0},type:{type:String,default:"text"},value:{type:[String,Number],default:""},errors:{type:String,default:""}},setup(n,{emit:a}){const e=c(n.value),t=l=>{e.value=l.target.value,a("update:modelValue",e.value)};return f(()=>n.value,l=>{e.value=l}),{internalValue:e,updateValue:t}}},S={class:"text-field"},V=["for"],k=["type","id"];function B(n,a,e,t,l,u){return d(),o("div",S,[s("label",{for:e.id},p(e.label),9,V),_(s("input",{type:e.type,id:e.id,"onUpdate:modelValue":a[0]||(a[0]=r=>t.internalValue=r),onInput:a[1]||(a[1]=(...r)=>t.updateValue&&t.updateValue(...r))},null,40,k),[[m,t.internalValue]])])}const z=i(g,[["render",B],["__scopeId","data-v-34182cc0"]]),C={props:{variant:{type:String,default:"primary"},size:{type:String,default:"md"}},setup(n,{emit:a}){const e=v(()=>["btn",`btn-${n.variant}`,`btn-${n.size}`]);function t(){a("clickButton")}return{buttonClasses:e,handleClick:t}}};function x(n,a,e,t,l,u){return d(),o("button",{class:b(t.buttonClasses),onClick:a[0]||(a[0]=(...r)=>t.handleClick&&t.handleClick(...r))},[y(n.$slots,"default",{},void 0)],2)}const D=i(C,[["render",x],["__scopeId","data-v-f610bff0"]]);export{D as B,z as T};