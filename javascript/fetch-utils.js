/* Data functions */
export async function createLists(item) {
  return await client.from("shopping_list").insert(item).single();
}

export async function getLists() {
  return await client.from("shopping_list").select("*").order("created_at");
}

export async function boughtItem(id) {
  return await client
    .from("shopping_list")
    .update({ bought: true })
    .eq("id", id)
    .single();
}

export async function deleteAllItems() {
  const user = getUser();
  return await client.from("shopping_list").delete().eq("user_id", user.id);
}
