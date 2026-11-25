import type { Language } from "../types";
import { en } from "./en";
import { pl } from "./pl";
import type { TranslationKey } from "./pl";

export type TranslationParams = Record<string, string | number>;

const dictionaries: Record<Language, Record<TranslationKey, string>> = {
  PL: pl,
  EN: en,
};

/** Looks up `key` for `language` and fills `{param}` placeholders. */
export function translate(
  language: Language,
  key: TranslationKey,
  params?: TranslationParams,
): string {
  const text = dictionaries[language][key];
  if (!params) return text;
  return text.replace(/\{(\w+)\}/g, (match, name: string) =>
    name in params ? String(params[name]) : match,
  );
}
