const logo = document.querySelectorAll("#sm_logo path");

for (let i = 0; i < logo.length ; i++){
    console.log(`letter ${i} is ${logo[i].getTotalLength()} `);
    
}