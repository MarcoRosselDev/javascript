const tareas = [
    {   title: 'Mañana',
        name: 'ingles a2',
        date: '07/06/2022'
    },
    {   title: 'Tarde',
        name: 'javaScript',
        date: '09/06/2022'
    },
    {   title: 'Noche',
        name: 'React.js',
        date: '08/06/2022'
    }
];

const div1 = document.getElementById('div1');

tareas.forEach(tarea => {
    div1.innerHTML += `
    <h3>${tarea.title} </h3> 
    ${tarea.name}-
    ${tarea.date}
    `
})