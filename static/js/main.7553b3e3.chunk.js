(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{17:function(e,a,t){e.exports=t(49)},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},26:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),o=(t(22),t(2)),i=t(3),s=t(5),m=t(4);t(23);var d=function(e){var a=e.handleSearchChange;return r.a.createElement("div",{className:"searchbox"},r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control",type:"Search",onChange:function(e){return a(e)},placeholder:"Search Employees","aria-label":"Search"})))};t(24);var u=function(e){var a=e.handleSearchChange;return r.a.createElement("nav",{className:"navbar navbar-expand navbar-light bg-light"},r.a.createElement("div",{className:"navbar-collapse row",id:"navbarNav"},r.a.createElement(d,{handleSearchChange:a})))};t(25);var h=function(e){var a=e.employees;return r.a.createElement("tbody",null,void 0!==a[0]&&void 0!==a[0].name?a.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,o=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(o.date)))})):r.a.createElement(r.a.Fragment,null))};t(26);var f=function(e){var a=e.headings,t=e.employees,n=e.handleSort;return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,a.map((function(e){var a=e.name,t=e.width;return r.a.createElement("th",{className:"col",key:a,style:{width:t},onClick:function(){n(a.toLowerCase())}},a,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(h,{employees:t})))},p=t(16),v=t.n(p),E=function(){return v.a.get("https://randomuser.me/api/?results=50")},g=(t(44),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={employees:[{}],filteredEmployees:[{}],order:"descend"},e.headings=[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}],e.handleSort=function(a){"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"});var t=e.state.filteredEmployees.sort((function(t,n){return"ascend"===e.state.order?void 0===t[a]?1:void 0===n[a]?-1:"name"===a?t[a].first.localeCompare(n[a].first):t[a]-n[a]:void 0===t[a]?1:void 0===n[a]?-1:"name"===a?n[a].first.localeCompare(t[a].first):n[a]-t[a]}));e.setState({filteredEmployees:t})},e.handleSearchChange=function(a){console.log(a.target.value);var t=a.target.value,n=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLocaleLowerCase().indexOf(t.toLowerCase())}));e.setState({filteredEmployees:n})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;E().then((function(a){e.setState({employees:a.data.results,filteredEmployees:a.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{handleSearchChange:this.handleSearchChange}),r.a.createElement("div",{className:"data-area"},r.a.createElement(f,{headings:this.headings,employees:this.state.filteredEmployees,handleSort:this.handleSort})))}}]),t}(n.Component)),y=(t(45),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null))}}]),t}(n.Component));t(46);var b=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)};t(47);var N=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"),r.a.createElement("p",null,"Click on carrots to filter by heading, or use the search box to narrow your results."))};t(48);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null,r.a.createElement(N,null),r.a.createElement(y,null)))};c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7553b3e3.chunk.js.map