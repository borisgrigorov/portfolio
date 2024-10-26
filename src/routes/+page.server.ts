import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
    sendMessage: async ({ request }) => {
        const body = await request.formData();
        const email = body.get("email");
        const message = body.get("message");
        const name = body.get("name");
        console.log(email, message, name);

        if (!email || !message || !name) {
            return fail(400, {
                error: "Please fill in all fields",
                email,
                message: message,
                name,
            });
        }

        return { status: 200, body: { message: "success" } };
    },
} satisfies Actions;
