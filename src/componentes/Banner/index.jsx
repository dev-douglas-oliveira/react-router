import styles from "./Banner.module.css";
import circuloColorido from "../../assets/circulo_colorido.png";
import minhaFoto from "../../assets/minha_foto.png";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá Mundo</h1>
                <p className={styles.descricao}>
                    Estudante de DevOps, busco oportunidade para adquirir
                    experiência em desenvolvimento. Sou uma pessoa bastante
                    curiosa e gosto de resolver problemas, desde os mais simples
                    até os mais complexos. Aprender e superar expectativas, faz
                    parte do meu cotidiano. Busco oportunidade profissional que
                    permita meu crescimento intelectual, profissional e técnico.
                    Atualmente sou servidor público municipal e atuo na área
                    administrativa, no entanto estou migrando para a área de
                    desenvolvimento e já desenvolvo pequenos projetos. Tenho
                    conhecimentos em HTML, CSS, JavaScript, React.js, Node.js,
                    Git, Git Hub, Tomcat, Java, MySQL e Spring, Sou focado,
                    esforçado, dedicado, ágil, tenho habilidade de aprender sob
                    demanda e acima de tudo sou mega apaixonado por tecnologia.
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="Círculo Colorido"
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Desenvolvedor Douglas Oliveira"
                />
            </div>
        </div>
    );
}
