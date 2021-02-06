(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(17),c=n.n(i),r=(n(24),n(3)),s=n(4),l=n(6),d=n(5),u=n(7),m=n(2),f=n.n(m),p=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).updateCurrentText=function(e){var t=e.target.value;n.setState({inputText:t})},n.createTodoItem=function(e){e.preventDefault(),n.props.addItem(n.state.inputText)},n.createItemHtml=function(e){return e.editable?o.a.createElement("div",{className:"item "+(e.isDone?"doneItem":"activeItem"),key:e._id},o.a.createElement("label",null,o.a.createElement("i",{className:"far "+(e.isDone?"fa-check-circle":"fa-circle")}),o.a.createElement("input",{type:"text",value:e.text,onChange:function(t){return n.props.activeEdit(e._id,t)},autoFocus:!0})),o.a.createElement("span",null,o.a.createElement("button",{onClick:function(){return n.props.saveItem(e)}},o.a.createElement("i",{className:"far fa-save"})),o.a.createElement("button",{onClick:function(){return n.props.deleteItem(e)}},o.a.createElement("i",{className:"far fa-trash-alt"})))):o.a.createElement("div",{className:"item "+(e.isDone?"doneItem":"activeItem"),key:e._id},o.a.createElement("label",{onClick:function(){return n.props.doneItem(e)}},o.a.createElement("i",{className:"far "+(e.isDone?"fa-check-circle":"fa-circle")}),o.a.createElement("span",null,e.text)),o.a.createElement("span",null,o.a.createElement("button",{onClick:function(){return n.props.editItem(e._id)}},o.a.createElement("i",{className:"fas fa-pencil-alt"})),o.a.createElement("button",{onClick:function(){return n.props.deleteItem(e)}},o.a.createElement("i",{className:"far fa-trash-alt"}))))},n.state={inputText:""},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items,n=t.filter(function(e){return!e.isDone}).map(function(t){return e.createItemHtml(t)}),a=t.filter(function(e){return e.isDone}).map(function(t){return e.createItemHtml(t)});return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"header"},"ToDo"),o.a.createElement("div",{className:"itemList"},o.a.createElement("form",{className:"newItem item",onSubmit:this.createTodoItem},o.a.createElement("input",{ref:this.props.newItemRef,value:this.props.currentItem.text,onChange:function(t){return e.updateCurrentText(t)},type:"text",placeholder:"Add new item",required:!0}),o.a.createElement("button",{type:"submit"},o.a.createElement("i",{className:"fas fa-check"}))),n,a))}}]),t}(a.Component),h="https://imvpn22-todo.herokuapp.com/api",v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(d.a)(t).call(this,e))).addTodo=function(e){var t={text:e};n.addTodoInBackend(t);var a=n.state.items;t._id=Date.now(),a.push(t),n.setState({items:a})},n.updateTodo=function(e){n.updateTodoInBackend(e);var t=n.state.items.map(function(t){return t._id===e._id?e:t});n.setState({items:t})},n.deleteTodo=function(e){n.deleteTodoFromBackend(e._id);var t=n.state.items.filter(function(t){return t._id!==e._id});n.setState({items:t})},n.handleItemChange=function(e){var t={text:e};n.setState({currentItem:t})},n.doneItem=function(e){e.isDone=!e.isDone,n.updateTodo(e)},n.deleteItem=function(e){e.isDeleted=!0,n.updateTodo(e)},n.editItem=function(e){var t=n.state.items;t=t.map(function(t){return t._id===e&&(t.editable=!t.editable),t}),n.setState({items:t})},n.saveItem=function(e){e.editable=!1,n.updateTodo(e)},n.activeEdit=function(e,t){var a=t.target.value,o=n.state.items;o=o.map(function(t){return t._id===e&&(t.text=a),t}),n.setState({items:o})},n.updateLocalStorage=function(e){localStorage.setItem("todos",JSON.stringify(e))},n.getTodosFromBackend=function(){f.a.get(h+"/todos").then(function(e){var t=e.data.todos;n.setState({items:t}),n.updateLocalStorage(t)}).catch(function(e){console.log(e)})},n.updateTodoInBackend=function(e){f.a.put(h+"/todos",e).then(function(e){n.getTodosFromBackend()}).catch(function(e){console.log(e)})},n.addTodoInBackend=function(e){f.a.post(h+"/todos",e).then(function(e){n.getTodosFromBackend()}).catch(function(e){console.log(e)})},n.deleteTodoFromBackend=function(e){f.a.delete(h+"/todos/"+e).then(function(e){n.getTodosFromBackend()}).catch(function(e){console.log(e)})},n.newItemRef=o.a.createRef(),n.state={currentItem:{},items:[]},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.newItemRef.current.focus();var e=localStorage.getItem("todos"),t=[];try{t=JSON.parse(e)}catch(n){console.log(n)}t&&t.length&&this.setState({items:t}),this.getTodosFromBackend()}},{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(p,{items:this.state.items,newItemRef:this.newItemRef,currentItem:this.state.currentItem,handleItemChange:this.handleItemChange,addItem:this.addTodo,doneItem:this.doneItem,deleteItem:this.deleteItem,editItem:this.editItem,activeEdit:this.activeEdit,saveItem:this.saveItem}))}}]),t}(a.Component),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(v,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/todo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/todo","/service-worker.js");I?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):g(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):g(t,e)})}}()}},[[18,2,1]]]);
//# sourceMappingURL=main.98c4028a.chunk.js.map