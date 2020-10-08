
export class CssBuilder {
  private _styles = new Array<string>();

  if(cond: boolean | undefined, style: string): CssBuilder {
    if (cond) {
      this._styles.push(style)
    }
    return this;
  }

  add(style: string | undefined): CssBuilder {
    if (style) {
      this._styles.push(style)
    }

    return this;
  }

  get styles(): string {
    return this._styles.join(" ")
  }

}

export function Css(): CssBuilder {
  return new CssBuilder();
}