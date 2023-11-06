import { Input } from "../../components/Input";
import { PageHeader } from "../../components/PageHeader";
import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import { Textarea } from "../../components/Textarea";

export function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Faça parte do time de professores disponíveis."
        description="Preencha o formulário de inscrição."
      />

      <main>
        <fieldset>
          <legend>Seus Dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Foto" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Preço por hora da aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados.
          </p>
          <button type="button">Salvar Cadastro</button>
        </footer>
      </main>
    </div>
  );
}
