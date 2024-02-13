// 1 kad dijain------------
function calculotarA(){
    const Rabbi =document.getElementById('triangleCad')
    const Rayhan =Rabbi.value;
    const beshe=parseFloat(Rayhan)
    // console.log(beshe)
        const thisIS =document.getElementById('heinght');
        const Rafi=thisIS.value;
        const beShe=parseFloat(Rafi);
        // console.log(beShe)

        const Sorna =0.5*beshe*beShe
        console.log('This is a triangle total man:', Sorna)

}
// 2 kad dijain---------------------

function rhombusInput(){
    const Chabbir =document.getElementById('rhombusinput')
    const Shabbir=Chabbir.value;
    const Beshe=parseFloat(Shabbir)
    // console.log(Beshe)
    const najim=document.getElementById('Rhomdusinput');
    const nahid=najim.value;
    const BeShe=parseFloat(nahid)

    const sorna=Beshe*BeShe;
    console.log('This is a rhombus total man:', sorna)

    const RAbbi=document.getElementById('Cinput');
    RAbbi.innerText =sorna;
}

