import * as fs from "fs";

const readFileSync = (path: string) => fs.readFileSync(path, "utf-8");

const templates = {
  form: readFileSync("./views/form.html"),
  confirm: readFileSync("./views/confirm.html"),
};

export interface Confirm {
  comment: string;
}

export class View {
  public getForm(): string {
    return templates.form;
  }

  public getConfirm(props: Confirm): string {
    const html = templates.confirm.replace(/{{ comment }}/g, props.comment);
    return html;
  }
}
