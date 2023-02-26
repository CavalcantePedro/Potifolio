const iconSkill = document.querySelectorAll('.bt_skill');

iconSkill.forEach( (element) => 
{
    let desc = document.querySelector('.descHab');
    element.addEventListener('mouseover', (event) => 
    {
        switch (element.id) {
            case "git":
                desc.innerHTML = '<p>Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.</p>'
                break;
            case "cpp":
                desc.innerHTML = '<p>C++ é uma linguagem de programação compilada multi-paradigma (seu suporte inclui linguagem imperativa, orientada a objetos e genérica) e de uso geral.</p>'
                break;
            case "github":
                desc.innerHTML = '<p>GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.</p>'
                break;
            case "html":
                desc.innerHTML = '<p>HTML é uma linguagem de marcação utilizada na construção de páginas na Web.</p>'
                break;
            case "css":
                desc.innerHTML = '<p>Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web, aplicado diretamente nas tags HTML ou ficar contido dentro das tags <style>.</p>'
                break;
            case "js":
                desc.innerHTML = '<p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>'
                break;
            case "c":
                desc.innerHTML = '<p>C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural.</p>'
                break;
            case "csharp":
                desc.innerHTML = '<p>C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET.</p>'
            break;
        }
    });
    element.addEventListener('mouseout', (event) => 
    {
        desc.innerHTML= "<p>...</p>";
    });
});

