const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter component name: ", function (name) {
  const nameComponent = name[0].toUpperCase() + name.slice(1);
  const path = `src/components/${nameComponent}`;
  const badyComponent = `
    import React, { FC } from "react";
    import { ${nameComponent}Props } from "./${nameComponent}.props";
    import "./${nameComponent}.module.css";

    const ${nameComponent}: FC<${nameComponent}Props> = ({...props }) => {
    return (
        <div {...props}>
        </div>
     );
    };

    export default ${nameComponent};
    `;

  const propsComponent = `
    import { ReactNode } from "react";

    export interface ${nameComponent}Props extends React.HTMLAttributes<HTMLElement> {    
    // children: ReactNode;
    }
    `;

  // создаем папку для компонента
  fs.mkdir(path, (err) => {
    if (err) throw err; // не удалось создать папку
    console.log("Папка успешно создана");
  });
  //   создаем файлы
  fs.writeFileSync(`${path}/${nameComponent}.tsx`, badyComponent);
  fs.writeFileSync(`${path}/${nameComponent}.props.ts`, propsComponent);
  fs.writeFileSync(`${path}/${nameComponent}.module.css`, "");

  rl.close();
});

rl.on("close", function () {
  console.log("\nComponent created");
  process.exit(0);
});
