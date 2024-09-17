import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const About = async () => {
  return (
    <Dialog>
      <DialogTrigger>Sobre</DialogTrigger>
      <DialogContent className="w-[90%]">
        <DialogHeader>
          <DialogTitle>Sobre o Projeto</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>
            Esse é um projeto fullstack criado com o objetivo de dar visibiliade
            para os atletas olímpicos e paralímpicos brasileiros. A ideia é
            listar todos os atletas e suas contas do Instagram, filtrando por
            nome, modalidade, descrição, seguidores, esportes.
          </p>
          <br />
          <p>
            Nessa aplicação, foi utilizado dados reais dos atletas brasileiros.
            Se você encontrou alguma informação incorreta ou sentiu falta de
            algum atleta, por favor, entre em contato conosco.
          </p>
          <br />
          <p>
            Confira o código completo no
            <a
              href="https://github.com/pauloaraujo028/siga-seu-atleta"
              target="_blank"
              className="text-yellow-500 font-bold ml-1"
            >
              Repositório do projeto
            </a>
            .
          </p>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default About;
