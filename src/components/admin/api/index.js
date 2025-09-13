const nextPublicApiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

async function genericRequest(url, options = {}, parseJson = true) {
    console.log(options)
  try {
    const response = await fetch(`${nextPublicApiUrl}${url}`, options);
    console.log(response)
    const result = parseJson ? await response.json() : null;
    console.log(options)
    if (!response.ok) {
      return {
        success: false,
        message:
          result && typeof result === "object" && result.message
            ? result.message
            : "Error en la solicitud",
      };
    }

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Error al conectar con el servidor",
    };
  }
}

// Para peticiones que requieren token desde las cookies
function authRequest(url, options = {}, parseJson = true) {
  return genericRequest(
    url,
    {
      credentials: "include",
      ...options,
    },
    parseJson
  );
}

// Para peticiones publicas
function publicRequest(url, options = {}, parseJson = true) {
  return genericRequest(url, options, parseJson);
}

export async function loginAdmin({ user, password }) {
    console.log(user)
    console.log(password)
  const response = await authRequest("/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user, password }),
  });

  return response;
}
