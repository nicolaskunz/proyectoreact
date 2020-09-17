import React from "react";


function Form ( ){

  return( 
  <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input onInput= {onChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onInput= {onChangePassword} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button onClick={onChangeButton} type="submit" className="btn btn-primary">Funciona?</button>
  <button onSubmit={onChangeClick} type="submit" className="btn btn-primary">Submit</button>
</form>
  );
}

function onChangeEmail(event){
console.log(event.target.value);
}

function onChangePassword(event){
console.log(event.target.value);
}

function onChangeButton(event){
event.preventDefault()
alert("Si, funciona.");
}

function onChangeClick(event){
event.preventDefault()
}



export default function App() {
  return (
    <div>
      <Form/>
    </div>
  );
}