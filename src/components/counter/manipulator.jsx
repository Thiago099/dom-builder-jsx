export default function Counter({data ,text,fn}) {
  const button = <button class="button">{text}</button>
  button.event('click', fn)
  return button
}