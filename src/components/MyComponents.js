//Named Export ==> Can have Multiple Components Per File
export function FirstComponent() {
  return <h1>FirstComponent</h1>
}

export function SecondComponent() {
  return <h1>SecondComponent</h1>
}

//Default Export ==> Should have Only One Component Per File
export default function ThirdComponent() {
  return <h1>ThirdComponent</h1>
}