import React, { useState } from 'react';
import CadastrarAlunos from './CadastrarAlunos';
import Pagamentos from './Pagamentos';
import Agenda from './Agenda';
import Servicos from './Servicos';
import Progresso from './Progresso';
import AgendaAnual from './AgendaAnual';

function Dashboard({ logout }) {
  const [aba, setAba] = useState('agenda');

  return (
    <div>

      <nav className="flex gap-2 p-2 bg-gray-500 flex-wrap">
        <button onClick={() => setAba('agenda')}>Agenda </button>
        <button onClick={() => setAba('servicos')}>Serviços </button>
        <button onClick={() => setAba('alunos')}>Cadastros </button>
        <button onClick={() => setAba('progresso')}>Progresso </button>
        <button onClick={() => setAba('pagamentos')}>Financeiro  </button>
        <button onClick={() => setAba 
        ('agenda anual')}>Agenda/mês </ button>
      </nav>

      <main className="p-4">
        {aba === 'agenda' && <Agenda />}
        {aba === 'servicos' && <Servicos />}
        {aba === 'alunos' && <CadastrarAlunos />}
        {aba === 'progresso' && <Progresso />}
        {aba === 'pagamentos' && <Pagamentos />}
        {aba === 'agenda anual' &&
        <AgendaAnual />}
      </main>
    </div>
  );
}

export default Dashboard;