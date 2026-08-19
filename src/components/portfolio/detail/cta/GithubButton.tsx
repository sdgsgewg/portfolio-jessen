import { PortfolioRepository } from "@/types/portfolio";
import CtaButton from "./CtaButton";
import { FaGithub } from "react-icons/fa";
import GithubRepositoryMenu from "./GithubRepositoryMenu";

const GithubButton = ({ github }: { github: PortfolioRepository }) => {
  const repositories = [...new Set(Object.values(github).filter(Boolean))];

  if (repositories.length === 1) {
    return (
      <CtaButton
        link={repositories[0]}
        icon={<FaGithub />}
        text="Github"
        btnType="btn-dark"
      />
    );
  }

  return <GithubRepositoryMenu github={github} />;
};

export default GithubButton;
