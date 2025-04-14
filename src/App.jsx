import assembly from './assets/img/visual.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={assembly} alt="logo do seu trabalho" className='assembly' />
          </div>
          <div>
            <h1>Visual Basic</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>Historia</h2>
          <ul>
            <li>Visual Basic nasceu lá nos anos 90, criado pela Microsoft como uma forma de democratizar a programação. A ideia era simples: tornar o desenvolvimento de softwares para Windows algo mais visual, intuitivo e acessível — e deu certo. Com sua interface de "arrasta e solta" e uma sintaxe quase como o inglês do dia a dia, o VB virou febre entre programadores iniciantes e profissionais. Ele foi essencial na era dos sistemas de gestão feitos sob medida, e dominou por anos os bastidores de empresas. Com o tempo, evoluiu para o VB.NET, ganhando mais robustez e se encaixando no ecossistema .NET. Mesmo com o hype migrando pra outras linguagens, o legado do Visual Basic ainda vive, forte e silencioso, em muitas aplicações por aí.</li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>Visual Basic funciona como aquele professor paciente que te explica tudo com calma. A linguagem é baseada em eventos, o que significa que você programa "respostas" a interações do usuário, como cliques e digitação. No clássico ambiente do Visual Studio, você monta a interface visualmente e depois escreve o código por trás de cada botão, menu ou campo. O compilador transforma tudo isso em um programa executável pro Windows. Com o VB.NET, ele se tornou orientado a objetos e passou a rodar na plataforma .NET, podendo acessar bibliotecas modernas, interagir com bancos de dados, web services e muito mais. É uma linguagem que combina simplicidade com poder — ideal pra criar soluções rápidas e funcionais sem dor de cabeça.</li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Pedro Sante / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
