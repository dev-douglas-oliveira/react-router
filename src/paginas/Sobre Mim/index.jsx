import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Douglas Oliveira!
            </h3>
            <img
                className={styles.fotoSobreMim}
                src={fotoSobreMim}
                alt="Foto sobre mim"
            />
            <p className={styles.paragrafo}>
                Estudante de DevOps, busco oportunidade para adquirir
                experiência em desenvolvimento. Sou uma pessoa bastante curiosa
                e gosto de resolver problemas, desde os mais simples até os mais
                complexos. Aprender e superar expectativas, faz parte do meu
                cotidiano. Busco oportunidade profissional que permita meu
                crescimento intelectual, profissional e técnico. Atualmente sou
                servidor público municipal e atuo na área administrativa, no
                entanto estou migrando para a área de desenvolvimento e já
                desenvolvo pequenos projetos. Tenho conhecimentos em HTML, CSS,
                JavaScript, React.js, Node.js, Git, Git Hub, Tomcat, Java, MySQL
                e Spring, Sou focado, esforçado, dedicado, ágil, tenho
                habilidade de aprender sob demanda e acima de tudo sou mega
                apaixonado por tecnologia.
            </p>
            <p className={styles.paragrafo}>Este é o conteúdo do parágrafo 2</p>
            <p className={styles.paragrafo}>Este é o conteúdo do parágrafo 3</p>
            <p className={styles.paragrafo}>Este é o conteúdo do parágrafo 4</p>
        </PostModelo>
    );
}
