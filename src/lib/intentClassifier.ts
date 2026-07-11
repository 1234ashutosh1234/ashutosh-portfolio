export type Intent =
  | "n100"
  | "bluestock"
  | "resume"
  | "github"
  | "linkedin"
  | "contact"
  | "skills"
  | "education"
  | "experience"
  | "interview"
  | "general";

export function classifyIntent(message: string): Intent {

  const text = message.toLowerCase();
  
   if (
  /(bluestock|mutual fund|nav|mfapi|portfolio optimization)/i.test(text)
) {
  return "bluestock";
}

if (
  /(n100|financial intelligence|finance project|company analysis|stock analysis|stock screener)/i.test(text)
) {
  return "n100";
}

if (
  /\bn100\b/i.test(text) ||
  /\bfinancial\b/i.test(text) ||
  /\bfinance\b/i.test(text) ||
  /\bcompany\b/i.test(text) ||
  /\binvestment\b/i.test(text) ||
  /\bstock analysis\b/i.test(text) ||
  /\bstock screener\b/i.test(text)
) {
  return "n100";
}


  if (
    /(resume|cv)/i.test(text)
  ) {
    return "resume";
  }

  if (
    /(github|repository|repo|source code|code)/i.test(text)
  ) {
    return "github";
  }

  if (
    /(linkedin|professional profile)/i.test(text)
  ) {
    return "linkedin";
  }

  if (
    /(contact|email|phone)/i.test(text)
  ) {
    return "contact";
  }

  if (
    /(skill|technology|tech stack|language)/i.test(text)
  ) {
    return "skills";
  }

  if (
    /(education|college|university|study)/i.test(text)
  ) {
    return "education";
  }

  if (
    /(experience|internship|work)/i.test(text)
  ) {
    return "experience";
  }

  if (
    /(hire|strength|weakness|introduce|interview)/i.test(text)
  ) {
    return "interview";
  }

  return "general";
}