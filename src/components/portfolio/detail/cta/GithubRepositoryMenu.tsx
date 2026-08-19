import { PortfolioRepository } from "@/types/portfolio";
import { FaGithub } from "react-icons/fa";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const GithubRepositoryMenu = ({ github }: { github: PortfolioRepository }) => {
  const repositories = Object.entries(github).filter(([, url]) => Boolean(url));

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="btn-dark min-w-30 flex flex-col items-center justify-center gap-1"
        >
          <div className="text-xl">
            <FaGithub />
          </div>

          <span className="text-sm">Github</span>
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="top"
        align="center"
        sideOffset={12}
        className="w-64 rounded-2xl p-2"
      >
        <div className="px-3 py-2">
          <p className="text-sm font-semibold">GitHub Repositories</p>
          <p className="text-xs text-muted-foreground">
            Choose a repository to view
          </p>
        </div>

        <div className="mt-1 space-y-1">
          {repositories.map(([type, url]) => (
            <a
              key={type}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
            >
              <FaGithub className="shrink-0 text-lg" />

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium capitalize">{type}</p>
                <p className="text-xs text-muted-foreground">View repository</p>
              </div>

              <span className="text-sm text-muted-foreground">↗</span>
            </a>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default GithubRepositoryMenu;
