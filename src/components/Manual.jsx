import img from "../assets/manual.svg"
import maos from "../assets/maos.svg"

export  function Manual() {
  return (
    <section>
      <div className="manual">
        <div className="titulo">
          <p>Bem-vindo ao Tea Sense!</p>
          <h3>Manual completo de como usar o TeaSense</h3>
          <div>
            <img src={img} alt="" />
          </div>
        </div>

        <div className="descricao">
          <h4>1. Conteúdo da Embalagem</h4>
          <p>
          - 1x Dispositivo Tea Sense <br />
          - 1x Carregador USB <br />
          - 1x Manual de Instruções <br />
          - 1x Sensor de frequência cardíaca <br />
          - 1x Sensor de temperatura <br />
          - 1x Acelerômetro <br />
          - 1x Tela LC <br />
          </p>

          <h4>2. Configuração Inicial</h4>
          <h5>2.1 Carregar o Dispositivo</h5> <br />
          <p>1. Conecte o dispositivo Tea Sense ao carregador USB incluído. <br /> 2. Carregue totalmente o dispositivo antes do primeiro uso (aproximadamente 2 horas).</p> <br />

          <h5>2.2 Instalar o Aplicativo Complementar</h5> <br />
          <p>1. Baixe o aplicativo Tea Sense na App Store (iOS) ou Google Play Store (Android). <br /> 2. Instale e abra o aplicativo no seu smartphone ou tablet.</p>

          <h4>3. Emparelhar com o Aplicativo </h4>
          <p>1. No aplicativo Tea Sense, selecione "Emparelhar Dispositivo". <br /> 2. Ative o Bluetooth no seu smartphone ou tablet. <br /> 3. Siga as instruções no aplicativo para conectar o dispositivo Tea Sense.</p>

          <h4>3.2 Monitoramento em Tempo Real</h4>
          <p>1. Uma vez emparelhado, o dispositivo começará a enviar dados de frequência cardíaca, temperatura e movimento para o aplicativo. <br /> 2. A tela LCD no dispositivo também exibirá informações básicas e status de conexão.</p>

          <h4>4. Funcionalidades do Aplicativo</h4>
          <h5>4.1 Visualização de Dados</h5>  <br />
          <p>No aplicativo, você pode visualizar os dados coletados em tempo real, incluindo: </p> <br />
          <p> - Situações que requerem atenção do Psicologo <br />
              - Frequências Sonoras Captadas no Dia <br />
              - Nível 
          </p>

          <h4>4.2 Notificações e Alertas</h4>
          <p>- O aplicativo enviará notificações e alertas caso detecte anomalias ou situações que requerem atenção.</p>

          <h4>4.3 Relatórios e Histórico</h4>
          <p>1. Acompanhe o progresso e o histórico de dados da criança ao longo do tempo. <br /> 2. Gere relatórios para compartilhar com profissionais de saúde e educadores.</p>
        </div>
      </div>

        <div className="maos">
            <img src={maos} alt="" />
        </div>
    </section>
  )
}
