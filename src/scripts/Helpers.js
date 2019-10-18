export default function isPolishLanguage() {
  if (navigator.language !== 'pl-PL') {
    return false;
  }
  return true;
}
