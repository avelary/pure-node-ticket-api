import { create } from "../controllers/ticket/create.js"
import { index } from "../controllers/ticket/index.js"
import { update } from "../controllers/ticket/update.js"
import { updateStatus } from "../controllers/ticket/updateStatus.js"
import { remove } from "../controllers/ticket/remove.js"

export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: create,
  },
  {
    method: "GET",
    path: "/tickets",
    controller: index,
  },
  {
    method: "PUT",
    path: "/tickets/:id",
    controller: update,
  },
  {
    method: "PATCH",
    path: "/tickets/:id/close",
    controller: updateStatus,
  },
  {
    method: "DELETE",
    path: "/tickets/:id",
    controller: remove,
  },
]
