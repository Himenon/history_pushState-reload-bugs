import * as fs from "fs";

const readFileSync = (path: string) => fs.readFileSync(path, "utf-8");

const templates = {
  form: readFileSync("./views/form.html"),
  confirm: readFileSync("./views/confirm.html"),
  confirmHistoryPushState: readFileSync(
    "./views/confirm-history-push-state.html"
  ),
};

export class View {
  public getForm(): string {
    return templates.form;
  }

  public getConfirm(comment: string): string {
    const html = templates.confirm.replace(/{{ comment }}/g, comment);
    return html;
  }

  public getConfirmHistoryPushState(comment: string, url: string): string {
    const html = templates.confirmHistoryPushState
      .replace(/{{ url }}/g, url);
    return html;
  }
}
