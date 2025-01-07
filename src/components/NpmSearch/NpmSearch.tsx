import { FC, FormEvent, useState } from "react";
import { v4 } from "uuid";

interface PackageProps {
  objects: [
    {
      package: {
        date: string;
        description: string;
        keywords: string[];
        links: {
          npm: string;
          homepage: string;
          repository: string;
          bugs: string;
        };
        maintainers: [
          {
            username: string;
            email: string;
          }
        ];
        name: string;
        publisher: {
          username: string;
          email: string;
        };
        scope: string;
        version: string;
      };
      score: {
        detail: {
          quality: number;
          popularity: number;
          maintenance: number;
        };
        final: number;
      };
      searchScore: number;
    }
  ];
  time: string;
  total: number;
}

export const NpmSearch: FC = () => {
  const [packageName, setPackageName] = useState("");
  const [registryValues, setRegistryValues] = useState<string[] | undefined>(
    []
  );
  const [error, setError] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      if (
        (
          (event.target as HTMLElement).querySelector(
            "#search"
          ) as HTMLInputElement
        ).value === ""
      ) {
        setError(true);
        return;
      }
      const response = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${packageName}`
      );
      const data: PackageProps = await response.json();

      if (data) {
        const packageNames = data.objects.map((result) => {
          setError(false);
          return result.package.name;
        });

        setRegistryValues([...packageNames]);
      }
    } catch (err: unknown) {
      setError(true);
    }

    setPackageName("");
  }

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setPackageName(event.currentTarget.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-9/12 md:max-w-2xl mx-auto">
        <div className="flex flex-col p-4">
          <input
            id="search"
            type="search"
            placeholder="Enter package name..."
            className="border p-2 mb-3 outline-blue-200"
            value={packageName}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="border-red-50 border p-2 bg-blue-900 text-white tracking-widest"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="w-9/12 md:max-w-2xl mx-auto">
        {error && (
          <h1 className="pt-2 pl-4">
            An error has occurred, or you did not type a value into the search
            field.
          </h1>
        )}
        {!error && (
          <ul className="pt-2 pl-4">
            {registryValues?.map((result) => {
              return <li key={v4()}>{result}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};
