import { z } from "zod";
import { TaskStatus } from "./types";

export const createTaskSchema = z.object({
  name: z.string().min(1, "Zorunlu"),
  status: z.nativeEnum(TaskStatus, { required_error: "Zorunlu" }),
  workspaceId: z.string().trim().min(1, "Zorunlu"),
  projectId: z.string().trim().min(1, "Zorunlu"),
  dueDate: z.coerce.date(),
  assigneeId: z.string().trim().min(1, "Zorunlu"),
  description: z.string().optional(),
});
