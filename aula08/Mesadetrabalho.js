function podeSubir(altura, acompanhante) {
    if (altura >= 1.4 && altura <= 2.0 && altura > 2.0) {
        return 'Acesso autorizado! Divirta-se'
    }

  else if (altura < 1.40 && altura >= 1.2 && acompanhante === true) {
    return 'Acesso autorizado somente com acompanhante'
  }
  
  else (altura <= 1.2) ;
  return 'Acesso negado';
}

console.log(podeSubir(1.2, true));


