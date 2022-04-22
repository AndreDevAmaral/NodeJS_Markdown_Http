import fetch from "node-fetch";

function erros(erro) {
    throw new Error(erro.message)
}

async function checaStatus(arryUrls) {
    try {
        const arryStatus = await Promise
            .all(arryUrls
                .map(async url => {
                    const res = await fetch(url);
                    return res.status;
                }))
        return arryStatus
    } catch (erro) {
        erros();
    }

}

function geraArrayDeLinks(arrayLinks) {
    return arrayLinks
        .map(obejtoLink => Object
            .values(obejtoLink)
            .join());
}

export default async function validaUrls(arrayLinks) {
    const links = geraArrayDeLinks(arrayLinks);
    const statusLinks = await checaStatus(links);

    const resultado = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))
    return resultado;
}


