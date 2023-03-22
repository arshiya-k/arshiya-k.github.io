import Link from "next/link";
import Image from "next/image";

const Project = ({name, description, img, link}) => {
    return (
        <div className="scroll-section">
            <div className="project-content">
                <h2>{name}</h2>
                <div align="justify" >{description}</div>
            </div>
            <div className="project-img">
                <Link href={link}>
                    <div className="proj-image">
                    <Image src={img} alt={name} width={650} height={380} responsive/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Project;