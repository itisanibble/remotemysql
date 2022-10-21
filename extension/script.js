window.addEventListener('load', () => 
{
  let intervalo = 1000;

  const titulo = document.querySelector('title');
  titulo.text = 'Trajabando ...';

  //nota: el "else" esta validado en base al manifest.json con el "content_scripts" -> "matches"
  if (window.location.href == 'https://remotemysql.com/databases.php') 
  {
    const boton = document.querySelector('#js-surveyPrompt button');
    const iframe = document.querySelector('iframe#pollfishSurveyFrame');
    
    boton.click();

    setTimeout(() => { location.href = iframe.src; }, intervalo);
  } 
  else 
  {
    setTimeout(() => 
    {
      const p = document.querySelector('main p');
      if (p.textContent == '¡Alguien  se comió todas las encuestas!') 
      {
        setTimeout(() => { location.href = 'https://remotemysql.com/databases.php'; }, intervalo);
      }
      else
      {
        titulo.text = 'Termino ...';
      }
    }, intervalo);
  }
});
