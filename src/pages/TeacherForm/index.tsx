import { Input } from "../../components/Input";
import { PageHeader } from "../../components/PageHeader";
import warningIcon from "../../assets/images/icons/warning.svg";
import { Textarea } from "../../components/Textarea";
import { Select } from "../../components/Select";

import "./styles.css";

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

          <Select
            name="subject"
            label="Matéria"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Ciências", label: "Ciências" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Física", label: "Física" },
              { value: "História", label: "História" },
              { value: "Inglês", label: "Inglês" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Química", label: "Química" },
            ]}
          />
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
