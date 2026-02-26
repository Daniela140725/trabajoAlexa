let estudiante={
    nombre_completo:"Daniela murcia",
    nota1:4.0,
    nota2:3.5,
    nota3:5.0
}
function promedio(estudiante){
    let=0
    p=(estudiante.nota1+estudiante.nota2+estudiante.nota3)/3;
    console.log(p);
    return (p);
}
promedio(estudiante);