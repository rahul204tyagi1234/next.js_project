export default async function getChatUsers() {
  const result = await fetch("http://localhost:3000/api/userchat");
  return result.json();
}
