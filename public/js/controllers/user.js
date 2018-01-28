const electron = require('electron')
const database = require('../database/database')

const User = {
    data : null,
    init : () =>{
        User.setButtons();
    },
    setButtons: () =>{
        const btnSave = document.querySelector('.btn-save');
        btnSave.addEventListener('click', () => {
            User.save()
        })
    },
    save: () => {
        const user = {
            name     : document.getElementById('name').value,
            email    : document.getElementById('email').value,
            login    : document.getElementById('login').value,
            password : document.getElementById('password').value
        }
        const db = database.connection
        db.query('INSERT INTO user SET ?', [user], (err, result) =>{
            if(err){
                console.log('[ERROR!] => ' + err.message);
            }
            else{
                alert('Cadastro realizado com sucesso!')
                
            }
        })
    }
}

User.init()