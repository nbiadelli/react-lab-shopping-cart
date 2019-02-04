const base_url = 'http://localhost:3005/';

const getCheckout = async (checkoutId, couponId) => {
    try {
        const hasCoupon = couponId ? `?couponId=${couponId}` : '';
        const resp = await fetch(`${base_url}api/checkouts/${checkoutId}${hasCoupon}`)
        return resp.json();
    } catch(e) {
        return { error: "Falha de conexão, tente novamente mais tarde." }
    }
}

const postCheckout = async (checkoutId) => {
    try {
        const resp = await fetch(`${base_url}api/checkouts/${checkoutId}`, { method: "POST" });
        return resp.json();
    } catch(e) {
        return { status: "Falha de conexão, tente novamente mais tarde." }
    }
}

export { getCheckout, postCheckout };