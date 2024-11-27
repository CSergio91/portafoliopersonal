import React from 'react'
import Swal from 'sweetalert2'

export function copiarGmail(email) {
const input=document.createElement('input');
input.value=email;
document.body.appendChild(input);

input.select();
document.execCommand('copy');

document.body.removeChild(input);

Swal.fire({
    icon:'success', title:'!Copiado', text:'!Copiado al portapapeles, pega en tu correo y contactame',
    showConfirmButton:false,
    timer:2000
});
  
}
