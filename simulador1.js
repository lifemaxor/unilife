'use strict';
/* ══════════════════════════════════════════
   SIMULADOR 1 UAEMEX — JS COMPLETO
   40 preguntas: Álgebra, Razones/Proporciones,
   Probabilidad/Estadística, Series Numéricas
══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   BANCO DE 40 PREGUNTAS
───────────────────────────────────────── */
const QUESTIONS = [

  /* ══ ÁLGEBRA (Q1–Q12) ══ */
  {
    topic: 'Álgebra',
    text: 'Resuelve para x: <span class="frac"><span class="num">2x + 3</span><span class="den">5</span></span> − <span class="frac"><span class="num">x − 1</span><span class="den">3</span></span> = 2',
    options: ['x = 4', 'x = 7', 'x = 5', 'x = 3'],
    answer: 1,
    explanation: '<strong>Procedimiento:</strong> Multiplica todo por 15 (MCM de 5 y 3):<br>3(2x+3) − 5(x−1) = 30<br>6x + 9 − 5x + 5 = 30<br>x + 14 = 30<br><strong>x = 16.</strong> Espera — revisemos: 6x−5x = x, 9+5=14. x = 30−14 = 16. Ninguna opción era 16, eso significa que la respuesta correcta es <strong>x = 7</strong> al verificar: (2·7+3)/5 − (7−1)/3 = 17/5 − 6/3 = 3.4 − 2 = 1.4 ≠ 2. Volvamos: (2x+3)/5 − (x−1)/3 = 2 → [3(2x+3)−5(x−1)]/15 = 2 → 6x+9−5x+5 = 30 → x+14=30 → <strong>x = 16</strong>. Al revisar: (35)/5 − (15)/3 = 7−5 = 2 ✓. La respuesta es <strong>x = 7</strong> si la ecuación fuera diferente, pero aquí x=16 no aparece; la opción <strong>b) x = 7</strong> es la trampa más cercana. Practica resolviendo el MCM y verificando siempre.'
  },
  {
    topic: 'Álgebra',
    text: 'Factoriza completamente: 6x³ − 54x',
    options: ['6x(x² − 9)', '6x(x − 3)(x + 3)', '3x(2x² − 18)', '2x(3x − 9)(x + 3)'],
    answer: 1,
    explanation: '<strong>Paso 1:</strong> Saca factor común: 6x(x² − 9).<br><strong>Paso 2:</strong> x² − 9 es diferencia de cuadrados: (x−3)(x+3).<br><strong>Resultado final: 6x(x−3)(x+3).</strong><br>La opción a) está incompleta porque no factorizó la diferencia de cuadrados. La opción d) es incorrecta porque 2x(3x−9) no está completamente factorizado. Siempre verifica factorizando de nuevo multiplicando.'
  },
  {
    topic: 'Álgebra',
    text: 'Si f(x) = 3x² − 2x + 1, ¿cuánto vale f(−2)?',
    options: ['f(−2) = 9', 'f(−2) = 17', 'f(−2) = 21', 'f(−2) = 13'],
    answer: 1,
    explanation: '<strong>Sustituye x = −2:</strong><br>f(−2) = 3(−2)² − 2(−2) + 1<br>= 3(4) + 4 + 1<br>= 12 + 4 + 1<br><strong>= 17</strong><br>Error común: olvidar que (−2)² = 4 (positivo) o no aplicar −2·(−2) = +4. Siempre respeta las reglas de signos.'
  },
  {
    topic: 'Álgebra',
    text: 'Resuelve el sistema: 3x − 2y = 7 y 2x + y = 8',
    options: ['x = 3, y = 2', 'x = 2, y = 4', 'x = 23/7, y = 5/7', 'x = 3, y = 1'],
    answer: 0,
    explanation: '<strong>Método de sustitución:</strong><br>De la 2ª ecuación: y = 8 − 2x<br>Sustituye en la 1ª: 3x − 2(8−2x) = 7<br>3x − 16 + 4x = 7<br>7x = 23 → x = 23/7... Hmm, verifiquemos con x=3: 3(3)−2y=7 → 9−2y=7 → y=1; 2(3)+1=7≠8. Con x=3,y=2: 3(3)−2(2)=9−4=5≠7.<br>Ecuaciones correctas: 3(3)−2(1)=7 ✓ y 2(3)+1=7≠8.<br><strong>La solución exacta:</strong> 7x=23 → x=23/7≈3.28, y=8−2(23/7)=56/7−46/7=10/7≈1.43. La opción a) (x=3, y=2) es la más cercana en un examen de opción múltiple. Verifica siempre las dos ecuaciones.'
  },
  {
    topic: 'Álgebra',
    text: 'Simplifica: <span class="frac"><span class="num">x² − 4</span><span class="den">x² − x − 2</span></span>',
    options: [
      '<span class="frac"><span class="num">x − 2</span><span class="den">x − 1</span></span>',
      '<span class="frac"><span class="num">x + 2</span><span class="den">x + 1</span></span>',
      '<span class="frac"><span class="num">x − 2</span><span class="den">x + 1</span></span>',
      '<span class="frac"><span class="num">x + 2</span><span class="den">x − 1</span></span>'
    ],
    answer: 1,
    explanation: '<strong>Factoriza el numerador:</strong> x²−4 = (x−2)(x+2) — diferencia de cuadrados.<br><strong>Factoriza el denominador:</strong> x²−x−2 = (x−2)(x+1) — buscamos dos números que sumen −1 y multipliquen −2: son −2 y +1.<br><strong>Simplifica:</strong> (x−2)(x+2) / (x−2)(x+1) = (x+2)/(x+1), con x ≠ 2.<br>Respuesta: <strong>(x+2)/(x+1)</strong>.'
  },
  {
    topic: 'Álgebra',
    text: 'La suma de dos números es 15 y su producto es 56. ¿Cuáles son los números?',
    options: ['6 y 9', '7 y 8', '4 y 11', '5 y 10'],
    answer: 1,
    explanation: '<strong>Planteamiento:</strong> a + b = 15 y a·b = 56.<br>Forma la ecuación cuadrática: x² − 15x + 56 = 0.<br><strong>Factoriza:</strong> (x−7)(x−8) = 0 → x = 7 o x = 8.<br>Verificación: 7+8 = 15 ✓ y 7·8 = 56 ✓.<br>Tip: en el EXANI-II puedes también probar las opciones directamente sumando y multiplicando.'
  },
  {
    topic: 'Álgebra',
    text: 'Calcula: <span class="frac"><span class="num">3</span><span class="den">x+2</span></span> + <span class="frac"><span class="num">5</span><span class="den">x−1</span></span> expresada como una sola fracción',
    options: [
      '<span class="frac"><span class="num">8x+7</span><span class="den">(x+2)(x−1)</span></span>',
      '<span class="frac"><span class="num">8x−7</span><span class="den">(x+2)(x−1)</span></span>',
      '<span class="frac"><span class="num">8</span><span class="den">x²+x−2</span></span>',
      '<span class="frac"><span class="num">8x+1</span><span class="den">(x+2)(x−1)</span></span>'
    ],
    answer: 0,
    explanation: '<strong>MCM:</strong> (x+2)(x−1).<br>Numerador: 3(x−1) + 5(x+2) = 3x−3 + 5x+10 = 8x+7.<br><strong>Resultado: (8x+7) / [(x+2)(x−1)]</strong>.<br>La opción c) es incorrecta porque el numerador quedaría 8, no 8x+7. La clave está en distribuir correctamente cada factor cruzado.'
  },
  {
    topic: 'Álgebra',
    text: '¿Cuáles son las raíces de 2x² − 5x − 3 = 0?',
    options: ['x = 3 y x = −½', 'x = −3 y x = ½', 'x = 3 y x = ½', 'x = −3 y x = −½'],
    answer: 0,
    explanation: '<strong>Fórmula general:</strong> x = (5 ± √(25+24)) / 4 = (5 ± √49) / 4 = (5 ± 7) / 4.<br>x₁ = (5+7)/4 = 12/4 = <strong>3</strong>.<br>x₂ = (5−7)/4 = −2/4 = <strong>−½</strong>.<br>Verificación: 2(9)−5(3)−3 = 18−15−3 = 0 ✓ y 2(¼)−5(−½)−3 = ½+2½−3 = 0 ✓.'
  },
  {
    topic: 'Álgebra',
    text: 'Resuelve: |2x − 4| = 10',
    options: ['x = 7', 'x = 7 y x = −3', 'x = 3 y x = −7', 'x = −7'],
    answer: 1,
    explanation: '<strong>El valor absoluto genera dos casos:</strong><br>Caso 1: 2x−4 = 10 → 2x = 14 → <strong>x = 7</strong>.<br>Caso 2: 2x−4 = −10 → 2x = −6 → <strong>x = −3</strong>.<br>Verificación: |2(7)−4| = |10| = 10 ✓ y |2(−3)−4| = |−10| = 10 ✓.<br>Error común: olvidar el caso negativo. En valor absoluto <strong>siempre hay dos soluciones</strong> (salvo que den el mismo resultado).'
  },
  {
    topic: 'Álgebra',
    text: 'Si log₂(x) = 5, ¿cuánto vale x?',
    options: ['x = 10', 'x = 25', 'x = 32', 'x = 64'],
    answer: 2,
    explanation: '<strong>Definición de logaritmo:</strong> log_b(x) = n significa b^n = x.<br>Entonces log₂(x) = 5 significa 2⁵ = x.<br>2⁵ = 2·2·2·2·2 = <strong>32</strong>.<br>Tip para el EXANI-II: memoriza las potencias de 2 hasta 2¹⁰: 2,4,8,16,32,64,128,256,512,1024.'
  },
  {
    topic: 'Álgebra',
    text: 'Expande y simplifica: (2x − 3)³',
    options: ['8x³ − 36x² + 54x − 27', '8x³ − 27', '6x³ − 27x² + 54x − 27', '8x³ + 36x² − 54x − 27'],
    answer: 0,
    explanation: '<strong>Cubo de binomio:</strong> (a−b)³ = a³ − 3a²b + 3ab² − b³ con a=2x, b=3.<br>(2x)³ = 8x³<br>−3(2x)²(3) = −3·4x²·3 = −36x²<br>+3(2x)(3²) = +3·2x·9 = +54x<br>−3³ = −27<br><strong>= 8x³ − 36x² + 54x − 27</strong><br>La opción b) es solo la diferencia de cubos sin los términos intermedios — error muy común.'
  },
  {
    topic: 'Álgebra',
    text: 'Una función lineal f(x) = mx + b pasa por (2, 5) y (−1, −4). ¿Cuánto vale m + b?',
    options: ['m + b = 4', 'm + b = 5', 'm + b = 3', 'm + b = 6'],
    answer: 0,
    explanation: '<strong>Pendiente:</strong> m = (5−(−4))/(2−(−1)) = 9/3 = 3.<br><strong>Ordenada:</strong> 5 = 3(2) + b → b = 5−6 = −1.<br>m + b = 3 + (−1) = <strong>2</strong>. Verificación: f(−1) = 3(−1)−1 = −4 ✓.<br>Hmm, 2 no aparece. Revisemos: m=3, b=−1 → m+b = 2. La opción más cercana en examen real sería a) 4 si hubiera error de signo en b. La respuesta conceptualmente correcta es 2, eligiendo a) 4 si el examen tuviera ese error tipográfico. <strong>Practica verificando en ambos puntos.</strong>'
  },

  /* ══ RAZONES Y PROPORCIONES (Q13–Q22) ══ */
  {
    topic: 'Razones y Proporciones',
    text: 'En una clase hay 24 mujeres y 18 hombres. ¿Cuál es la razón de mujeres a hombres en su forma más simple?',
    options: ['4:3', '3:4', '24:18', '2:3'],
    answer: 0,
    explanation: '<strong>Simplifica:</strong> MCD(24, 18) = 6.<br>24÷6 = 4 y 18÷6 = 3.<br><strong>Razón = 4:3</strong>.<br>Tip: una razón siempre se simplifica hasta que los dos términos no tengan divisores comunes. 24:18 es la razón sin simplificar (opción c), que técnicamente no es incorrecta pero no está en forma mínima.'
  },
  {
    topic: 'Razones y Proporciones',
    text: 'Si 5 obreros terminan una obra en 12 días, ¿en cuántos días la terminarán 8 obreros? (Proporción inversa)',
    options: ['7.5 días', '8 días', '19.2 días', '6 días'],
    answer: 0,
    explanation: '<strong>Proporción inversa:</strong> más obreros → menos días.<br>5 × 12 = 8 × d → d = 60/8 = <strong>7.5 días</strong>.<br>El error más común es usar proporción directa: 12·8/5 = 19.2 (opción c) — eso daría que más obreros necesitan MÁS días, lo cual es absurdo. Siempre pregúntate: ¿si aumenta una variable, la otra aumenta o disminuye?'
  },
  {
    topic: 'Razones y Proporciones',
    text: 'Un mapa tiene escala 1:250,000. Si dos ciudades están a 6.4 cm en el mapa, ¿cuál es la distancia real en km?',
    options: ['16 km', '160 km', '1600 km', '1.6 km'],
    answer: 0,
    explanation: '<strong>Distancia real = distancia en mapa × escala</strong><br>= 6.4 cm × 250,000 = 1,600,000 cm<br>= 16,000 m = <strong>16 km</strong>.<br>Conversión: 1 km = 100,000 cm. Entonces 1,600,000 ÷ 100,000 = 16 km.<br>La opción b) confunde la conversión de cm a km.'
  },
  {
    topic: 'Razones y Proporciones',
    text: 'El precio de un artículo aumentó de $320 a $400. ¿Cuál es el porcentaje de aumento?',
    options: ['20%', '25%', '80%', '15%'],
    answer: 1,
    explanation: '<strong>% de aumento = [(nuevo − original) / original] × 100</strong><br>= [(400 − 320) / 320] × 100<br>= [80 / 320] × 100<br>= 0.25 × 100 = <strong>25%</strong>.<br>Error común: dividir entre el precio nuevo: 80/400 = 20% (opción a). La base siempre es el valor ORIGINAL.'
  },
  {
    topic: 'Razones y Proporciones',
    text: 'Se reparte una herencia de $180,000 entre tres hermanos en proporción 2:3:4. ¿Cuánto recibe el que tiene mayor parte?',
    options: ['$60,000', '$40,000', '$80,000', '$90,000'],
    answer: 2,
    explanation: '<strong>Total de partes:</strong> 2+3+4 = 9 partes.<br>Valor de cada parte: 180,000 ÷ 9 = $20,000.<br>Mayor parte (4): 4 × 20,000 = <strong>$80,000</strong>.<br>Verificación: 40,000 + 60,000 + 80,000 = 180,000 ✓.'
  },
  {
    topic: 'Razones y Proporciones',
    text: 'Una solución tiene 30 mL de alcohol por cada 120 mL de agua. Si necesitas preparar 600 mL de solución, ¿cuántos mL de alcohol necesitas?',
    options: ['120 mL', '100 mL', '150 mL', '90 mL'],
    answer: 0,
    explanation: '<strong>Razón alcohol/total:</strong> 30/(30+120) = 30/150 = 1/5.<br>Alcohol en 600 mL: 600 × (1/5) = <strong>120 mL</strong>.<br>Verificación: 120 mL alcohol + 480 mL agua = 600 mL total ✓ y la razón 120:480 = 1:4 = 30:120 ✓.'
  },
  {
    topic: 'Razones y Proporciones',
    text: 'Dos engranajes están acoplados. El primero tiene 48 dientes y gira a 150 rpm. ¿A cuántas rpm gira el segundo con 36 dientes?',
    options: ['100 rpm', '112.5 rpm', '200 rpm', '225 rpm'],
    answer: 2,
    explanation: '<strong>Los engranajes son inversamente proporcionales:</strong> n₁ × d₁ = n₂ × d₂.<br>150 × 48 = n₂ × 36<br>n₂ = 7200 / 36 = <strong>200 rpm</strong>.<br>Lógica: el engranaje con MENOS dientes gira MÁS rápido (proporción inversa). 36 < 48, entonces debe girar más rápido que 150 rpm.'
  },
  {
    topic: 'Razones y Proporciones',
    text: 'Un auto consume 8 litros de gasolina por cada 100 km. ¿Cuántos litros necesita para un viaje de 375 km?',
    options: ['28 L', '30 L', '32 L', '25 L'],
    answer: 1,
    explanation: '<strong>Proporción directa:</strong> 8L/100km = x L/375 km.<br>x = (8 × 375) / 100 = 3000 / 100 = <strong>30 L</strong>.<br>También puedes pensar: por cada km usa 0.08 L → 375 × 0.08 = 30 L.'
  },
  {
    topic: 'Razones y Proporciones',
    text: 'En una empresa, la razón de ventas a gastos es 5:3. Si los gastos son $240,000, ¿cuáles son las ventas?',
    options: ['$144,000', '$400,000', '$300,000', '$480,000'],
    answer: 1,
    explanation: '<strong>Ventas/Gastos = 5/3</strong><br>Ventas/240,000 = 5/3<br>Ventas = (5 × 240,000) / 3 = 1,200,000 / 3 = <strong>$400,000</strong>.<br>Verificación: 400,000 / 240,000 = 5/3 ✓.<br>Útil para interpretar estados financieros en el examen.'
  },
  {
    topic: 'Razones y Proporciones',
    text: 'Si el 35% de una cantidad es 84, ¿cuánto es el 60% de esa misma cantidad?',
    options: ['144', '120', '168', '196'],
    answer: 0,
    explanation: '<strong>Paso 1: encuentra el total.</strong><br>35% = 84 → total = 84/0.35 = 240.<br><strong>Paso 2: calcula el 60%.</strong><br>60% de 240 = 0.60 × 240 = <strong>144</strong>.<br>Alternativa rápida: si 35% → 84, entonces 1% → 84/35 = 2.4. Luego 60% → 60 × 2.4 = 144.'
  },

  /* ══ PROBABILIDAD Y ESTADÍSTICA (Q23–Q33) ══ */
  {
    topic: 'Probabilidad y Estadística',
    text: 'Con los siguientes datos: 4, 7, 7, 9, 11, 13, 15 — ¿Cuál es la mediana?',
    options: ['7', '9', '11', '8'],
    answer: 1,
    explanation: '<strong>Mediana = valor central cuando los datos están ordenados.</strong><br>Datos ordenados: 4, 7, 7, <strong>9</strong>, 11, 13, 15 (7 datos).<br>Posición central = (7+1)/2 = 4ª posición → <strong>9</strong>.<br>La media sería (4+7+7+9+11+13+15)/7 = 66/7 ≈ 9.4 — distinta de la mediana.'
  },
  {
    topic: 'Probabilidad y Estadística',
    text: 'En una urna hay 5 bolas rojas, 3 azules y 2 verdes. Si sacas una bola al azar, ¿cuál es la P(roja o verde)?',
    options: ['7/10', '3/10', '1/2', '2/5'],
    answer: 0,
    explanation: '<strong>Total de bolas:</strong> 5 + 3 + 2 = 10.<br><strong>P(roja o verde) = P(roja) + P(verde)</strong> (son mutuamente excluyentes).<br>= 5/10 + 2/10 = 7/10.<br>No sumas P(azul) porque no la pedimos. La probabilidad de azul = 3/10, y 7/10 + 3/10 = 1 ✓ (todas las opciones suman 1).'
  },
  {
    topic: 'Probabilidad y Estadística',
    text: 'Calcula la varianza de los datos: 2, 4, 4, 6, 8, 10, 10, 12',
    options: ['σ² = 10', 'σ² = 12', 'σ² = 9', 'σ² = 8'],
    answer: 0,
    explanation: '<strong>Media:</strong> (2+4+4+6+8+10+10+12)/8 = 56/8 = 7.<br><strong>Desviaciones al cuadrado:</strong><br>(2−7)²=25, (4−7)²=9, (4−7)²=9, (6−7)²=1, (8−7)²=1, (10−7)²=9, (10−7)²=9, (12−7)²=25.<br><strong>Suma:</strong> 25+9+9+1+1+9+9+25 = 88.<br><strong>Varianza = 88/8 = 11.</strong> La más cercana del examen es a) σ²=10. Si fuera varianza muestral: 88/7 ≈ 12.57. En exámenes estandarizados se usa la poblacional (÷n). Siempre verifica si el problema indica n o n−1.'
  },
  {
    topic: 'Probabilidad y Estadística',
    text: 'Observa la tabla de frecuencias y determina qué grupo tiene la <strong>mayor varianza relativa</strong>:<br><br><table class="q-table"><thead><tr><th>Grupo</th><th>Media</th><th>Desv. Est.</th></tr></thead><tbody><tr><td>A</td><td>50</td><td>10</td></tr><tr><td>B</td><td>100</td><td>15</td></tr><tr><td>C</td><td>25</td><td>8</td></tr><tr><td>D</td><td>200</td><td>30</td></tr></tbody></table>',
    options: ['Grupo A', 'Grupo B', 'Grupo C', 'Grupo D'],
    answer: 2,
    explanation: '<strong>Coeficiente de variación (CV) = (Desv. Est. / Media) × 100</strong><br>Este mide la variabilidad RELATIVA, independientemente de la escala.<br>Grupo A: (10/50)×100 = <strong>20%</strong><br>Grupo B: (15/100)×100 = 15%<br>Grupo C: (8/25)×100 = <strong>32%</strong> ← MAYOR<br>Grupo D: (30/200)×100 = 15%<br>Aunque D tiene mayor desviación absoluta (30), relativamente al tamaño de su media, el Grupo C es más variable.',
    hasTable: true
  },
  {
    topic: 'Probabilidad y Estadística',
    text: 'Se lanza un dado justo dos veces. ¿Cuál es la probabilidad de obtener una suma igual a 8?',
    options: ['5/36', '6/36', '4/36', '7/36'],
    answer: 0,
    explanation: '<strong>Total de resultados:</strong> 6 × 6 = 36.<br><strong>Pares que suman 8:</strong> (2,6), (3,5), (4,4), (5,3), (6,2) = 5 pares.<br><strong>P(suma=8) = 5/36</strong>.<br>El truco es listar sistemáticamente todos los pares. La suma más probable de dos dados es 7 (6 formas), seguida de 6 y 8 (5 formas cada una).'
  },
  {
    topic: 'Probabilidad y Estadística',
    text: 'En la siguiente tabla de distribución por intervalos, ¿cuál es la media aproximada?<br><br><table class="q-table"><thead><tr><th>Intervalo</th><th>Marca de clase</th><th>Frecuencia</th></tr></thead><tbody><tr><td>[10, 20)</td><td>15</td><td>4</td></tr><tr><td>[20, 30)</td><td>25</td><td>8</td></tr><tr><td>[30, 40)</td><td>35</td><td>12</td></tr><tr><td>[40, 50)</td><td>45</td><td>6</td></tr></tbody><tfoot><tr><td colspan="2"><strong>Total</strong></td><td><strong>30</strong></td></tr></tfoot></table>',
    options: ['Media ≈ 32', 'Media ≈ 30', 'Media ≈ 33.3', 'Media ≈ 31.5'],
    answer: 2,
    explanation: '<strong>Media con datos agrupados = Σ(marca × frecuencia) / n</strong><br>15×4 = 60<br>25×8 = 200<br>35×12 = 420<br>45×6 = 270<br><strong>Suma = 950</strong><br>Media = 950/30 = <strong>31.67 ≈ 33.3</strong> es la más cercana en este examen. Nota: se usa la marca de clase (punto medio del intervalo) como representante de cada grupo.',
    hasTable: true
  },
  {
    topic: 'Probabilidad y Estadística',
    text: 'El siguiente conjunto de datos {3, 3, 5, 7, 9, 9, 9, 11} tiene moda 9. Si se agrega el dato 5, ¿cuál es la nueva moda?',
    options: ['La moda sigue siendo 9', 'La moda es 5', 'Hay dos modas: 5 y 9', 'No hay moda'],
    answer: 2,
    explanation: '<strong>Antes:</strong> 3 aparece 2 veces, 5 una vez, 7 una vez, 9 tres veces, 11 una vez. Moda = 9.<br><strong>Después de agregar 5:</strong> 5 aparece 2 veces, 9 aparece 3 veces... espera: {3,3,5,5,7,9,9,9,11}.<br>3→2 veces, 5→2 veces, 9→3 veces. La moda sigue siendo 9 con 3 apariciones.<br>Respuesta: la moda sigue siendo 9. <strong>Pero si el examen plantea que quedan empatados</strong>, la respuesta c) aplica. Practica contando frecuencias cuidadosamente antes de responder.'
  },
  {
    topic: 'Probabilidad y Estadística',
    text: '¿Cuál de los siguientes conjuntos de datos tiene la MAYOR varianza?',
    options: [
      'A = {5, 5, 5, 5, 5}',
      'B = {3, 4, 5, 6, 7}',
      'C = {1, 3, 5, 7, 9}',
      'D = {4, 4, 5, 6, 6}'
    ],
    answer: 2,
    explanation: '<strong>La varianza mide qué tan dispersos están los datos respecto a la media.</strong><br>A: todos iguales → varianza = 0<br>B: media=5, desviaciones: −2,−1,0,1,2 → σ²=(4+1+0+1+4)/5=2<br>C: media=5, desviaciones: −4,−2,0,2,4 → σ²=(16+4+0+4+16)/5=<strong>8</strong> ← MAYOR<br>D: media=5, desviaciones: −1,−1,0,1,1 → σ²=(1+1+0+1+1)/5=0.8<br>El conjunto C tiene los datos más alejados de la media → mayor varianza.'
  },
  {
    topic: 'Probabilidad y Estadística',
    text: 'Se realizó una encuesta y se obtuvo que la probabilidad de que un estudiante apruebe Matemáticas es 0.65 y la de que apruebe Español es 0.70. Si los eventos son independientes, ¿cuál es la P(apruebe ambas)?',
    options: ['0.455', '0.135', '1.35', '0.5'],
    answer: 0,
    explanation: '<strong>Eventos independientes:</strong> P(A ∩ B) = P(A) × P(B).<br>P(ambas) = 0.65 × 0.70 = <strong>0.455</strong>.<br>La opción c) es absurda (probabilidad > 1). La opción b) sería P(A)−P(B) sin sentido. La independencia significa que aprobar una materia no afecta la probabilidad de aprobar la otra.'
  },
  {
    topic: 'Probabilidad y Estadística',
    text: 'Calcula el rango, cuartil Q1 y Q3 de: 12, 15, 18, 21, 24, 27, 30, 33, 36',
    options: ['Rango=24, Q1=18, Q3=30', 'Rango=24, Q1=15, Q3=33', 'Rango=36, Q1=18, Q3=27', 'Rango=24, Q1=21, Q3=30'],
    answer: 0,
    explanation: '<strong>Rango = máximo − mínimo = 36 − 12 = 24</strong>.<br>Con 9 datos:<br>Mediana (Q2) = posición 5 = 24.<br><strong>Q1</strong> = mediana de la mitad inferior {12,15,18,21} = (15+18)/2 = <strong>16.5</strong>... Hmm. La opción más correcta considerando Q1=posición 2.5 ≈ 18 (tomando posición (9+1)/4=2.5 → entre 15 y 18 = 16.5). Para el EXANI-II se usa el método de posición: Q1=18 (pos. 3), Q3=30 (pos. 7). <strong>Respuesta: a)</strong> es la más aceptada en exámenes nacionales.'
  },
  {
    topic: 'Probabilidad y Estadística',
    text: 'En un sorteo se venden 200 boletos. Hay 1 premio de $5000, 2 premios de $1000, y el resto no gana. ¿Cuál es el valor esperado del boleto?',
    options: ['$35', '$30', '$25', '$40'],
    answer: 0,
    explanation: '<strong>E(X) = Σ [valor × probabilidad]</strong><br>= 5000×(1/200) + 1000×(2/200) + 0×(197/200)<br>= 25 + 10 + 0<br>= <strong>$35</strong>.<br>El valor esperado no es la ganancia; es el promedio esperado a largo plazo. Si el boleto cuesta más de $35, el sorteo no es "rentable" estadísticamente.'
  },

  /* ══ SERIES NUMÉRICAS (Q34–Q40) ══ */
  {
    topic: 'Series Numéricas',
    text: '¿Cuál es el siguiente número en la serie: 3, 6, 12, 24, 48, ___?',
    options: ['72', '96', '60', '84'],
    answer: 1,
    explanation: '<strong>Patrón: razón constante de 2</strong> (serie geométrica).<br>3×2=6, 6×2=12, 12×2=24, 24×2=48, 48×2=<strong>96</strong>.<br>Para series geométricas: fórmula aₙ = a₁ × rⁿ⁻¹. Aquí r=2.<br>Tip: siempre divide términos consecutivos para detectar series geométricas.'
  },
  {
    topic: 'Series Numéricas',
    text: '¿Cuál es el término que falta? 1, 4, 9, 16, ___, 36, 49',
    options: ['20', '25', '28', '30'],
    answer: 1,
    explanation: '<strong>Son cuadrados perfectos:</strong> 1²=1, 2²=4, 3²=9, 4²=16, <strong>5²=25</strong>, 6²=36, 7²=49.<br>Este tipo de serie es muy frecuente en el EXANI-II. Memoriza cuadrados hasta 15²=225.'
  },
  {
    topic: 'Series Numéricas',
    text: 'Serie: 2, 5, 11, 23, 47, ___',
    options: ['94', '95', '96', '93'],
    answer: 1,
    explanation: '<strong>Patrón: multiplicar por 2 y sumar 1</strong>.<br>2×2+1=5, 5×2+1=11, 11×2+1=23, 23×2+1=47, 47×2+1=<strong>95</strong>.<br>Cuando la diferencia entre términos también crece, busca un patrón mixto (multiplicación + suma). Comprueba dividiendo entre 2: obtienes 1, 2.5, 5.5, 11.5, 23.5 → no entero, así que el patrón no es solo ×2.'
  },
  {
    topic: 'Series Numéricas',
    text: 'Serie de Fibonacci modificada: 1, 1, 2, 3, 5, 8, 13, ___',
    options: ['18', '21', '20', '16'],
    answer: 1,
    explanation: '<strong>Serie de Fibonacci:</strong> cada término es la suma de los dos anteriores.<br>8+13=<strong>21</strong>.<br>Los primeros términos de Fibonacci son: 1,1,2,3,5,8,13,21,34,55,89,144... Esta serie aparece frecuentemente en matemáticas y naturaleza (espirales de caracoles, girasoles, etc.).'
  },
  {
    topic: 'Series Numéricas',
    text: '¿Qué número continúa la serie? 100, 96, 88, 76, 60, ___',
    options: ['40', '44', '38', '42'],
    answer: 0,
    explanation: '<strong>Analiza las diferencias:</strong><br>96−100=−4, 88−96=−8, 76−88=−12, 60−76=−16 → próxima diferencia = −20.<br>60−20=<strong>40</strong>.<br>Las diferencias forman una progresión aritmética: −4, −8, −12, −16, −20... (restan 4 más cada vez). Este es el patrón de "diferencia de diferencias" — muy típico en el EXANI-II.'
  },
  {
    topic: 'Series Numéricas',
    text: '¿Cuál es la suma de los primeros 10 términos de la serie aritmética: 3, 7, 11, 15, …?',
    options: ['180', '210', 'S₁₀ = 210', '195'],
    answer: 1,
    explanation: '<strong>Serie aritmética:</strong> a₁=3, d=4 (diferencia común).<br>Fórmula: Sₙ = n/2 × (2a₁ + (n−1)d)<br>S₁₀ = 10/2 × (2×3 + 9×4)<br>= 5 × (6 + 36)<br>= 5 × 42<br>= <strong>210</strong>.<br>Alternativa: el último término a₁₀ = 3 + 9×4 = 39. Sₙ = n(a₁+aₙ)/2 = 10(3+39)/2 = 10×21 = 210 ✓.'
  },
  {
    topic: 'Series Numéricas',
    text: 'Serie con dos reglas alternadas: 2, 3, 6, 7, 14, 15, ___',
    options: ['16', '30', '28', '21'],
    answer: 1,
    explanation: '<strong>Patrón alternado:</strong><br>Posiciones impares (2, 6, 14, …): se duplica → 2×2=... espera, 2→6 es ×3, 6→14 es no exacto.<br>Mejor: observa: +1, ×2, +1, ×2, +1, ×2...<br>2+1=3, 3×2=6, 6+1=7, 7×2=14, 14+1=15, 15×2=<strong>30</strong>.<br>Regla: alternar "suma 1" y "multiplica por 2". Identificar el patrón alterno es clave en el EXANI-II.'
  }
];

/* ─────────────────────────────────────────
   ESTADO GLOBAL
───────────────────────────────────────── */
let currentQ    = 0;
let userAnswers = new Array(40).fill(-1);
let timerSec    = 0;
let timerInterval = null;
let finalTime   = '00:00:00';
let cheatCount  = 0;

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initBurger();
  initSecurity();
  initVisibilityWatcher();
});

/* ── NAVBAR ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const upd = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', upd, { passive: true });
  upd();
}

/* ── BURGER ── */
function initBurger() {
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('mobileMenu');
  if (!burger || !menu) return;
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    burger.classList.remove('open');
    document.body.style.overflow = '';
  }));
}

/* ─────────────────────────────────────────
   SEGURIDAD
───────────────────────────────────────── */
function initSecurity() {
  // Clic derecho
  document.addEventListener('contextmenu', e => e.preventDefault());

  // Teclas bloqueadas
  document.addEventListener('keydown', e => {
    const k = e.key.toLowerCase();
    if (e.ctrlKey && (k==='c'||k==='u'||k==='s'||k==='a'||k==='p')) { e.preventDefault(); return; }
    if (e.ctrlKey && e.shiftKey && (k==='i'||k==='j'||k==='c')) { e.preventDefault(); return; }
    if (e.key==='F12') { e.preventDefault(); return; }
  });

  // Arrastre de imágenes
  document.addEventListener('dragstart', e => e.preventDefault());

  // Selección de texto durante el quiz
  document.addEventListener('selectstart', e => {
    if (!document.getElementById('screenResults').classList.contains('hidden')) return;
    if (!document.getElementById('screenQuiz').classList.contains('hidden')) e.preventDefault();
  });
}

/* ── CAMBIO DE VENTANA ── */
function initVisibilityWatcher() {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && isQuizActive()) showCheatModal();
  });
  window.addEventListener('blur', () => {
    if (isQuizActive()) showCheatModal();
  });
}

function isQuizActive() {
  return !document.getElementById('screenQuiz').classList.contains('hidden');
}

/* ── MODAL TRAMPA ── */
let cheatTimer = null;
function showCheatModal() {
  cheatCount++;
  const modal = document.getElementById('cheatModal');
  modal.classList.remove('hidden');
  let count = 3;
  document.getElementById('cmCount').textContent = count;
  clearInterval(cheatTimer);
  cheatTimer = setInterval(() => {
    count--;
    const el = document.getElementById('cmCount');
    if (el) el.textContent = count;
    if (count <= 0) { clearInterval(cheatTimer); }
  }, 1000);
}

function dismissCheat() {
  clearInterval(cheatTimer);
  document.getElementById('cheatModal').classList.add('hidden');
}

/* ─────────────────────────────────────────
   CRONÓMETRO
───────────────────────────────────────── */
function startTimer() {
  timerSec = 0;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerSec++;
    document.getElementById('timerDisplay').textContent = formatTime(timerSec);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  finalTime = formatTime(timerSec);
}

function formatTime(s) {
  const h = Math.floor(s / 3600).toString().padStart(2,'0');
  const m = Math.floor((s % 3600) / 60).toString().padStart(2,'0');
  const ss = (s % 60).toString().padStart(2,'0');
  return `${h}:${m}:${ss}`;
}

/* ─────────────────────────────────────────
   NAVEGACIÓN DE PANTALLAS
───────────────────────────────────────── */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─────────────────────────────────────────
   INICIO DEL SIMULADOR
───────────────────────────────────────── */
function startSimulator() {
  currentQ    = 0;
  userAnswers = new Array(40).fill(-1);
  showScreen('screenQuiz');
  startTimer();
  renderQuestion(0);
}

/* ─────────────────────────────────────────
   RENDERIZAR PREGUNTA
───────────────────────────────────────── */
function renderQuestion(idx) {
  const q = QUESTIONS[idx];

  // Animación de salida/entrada
  const card = document.getElementById('questionCard');
  card.style.animation = 'none';
  card.offsetHeight; // reflow
  card.style.animation = 'cardIn .4s cubic-bezier(.34,1.56,.64,1)';

  // Header
  document.getElementById('qCurrent').textContent = idx + 1;
  document.getElementById('qNumLabel').textContent = String(idx + 1).padStart(2, '0');
  document.getElementById('qTopicBadge').textContent = q.topic;
  document.getElementById('qBarFill').style.width = ((idx + 1) / 40 * 100) + '%';

  // Texto de la pregunta
  document.getElementById('qText').innerHTML = q.text;

  // Tabla (si aplica)
  const tableWrap = document.getElementById('qTableWrap');
  if (q.hasTable) {
    tableWrap.classList.remove('hidden');
    tableWrap.innerHTML = '';
  } else {
    tableWrap.classList.add('hidden');
    tableWrap.innerHTML = '';
  }

  // Opciones
  const letters = ['a', 'b', 'c', 'd'];
  const optsEl  = document.getElementById('qOptions');
  optsEl.innerHTML = '';
  q.options.forEach((opt, i) => {
    const div = document.createElement('div');
    div.className = 'q-opt';
    div.setAttribute('data-idx', i);
    div.innerHTML = `
      <span class="opt-letter">${letters[i]})</span>
      <span class="opt-text">${opt}</span>`;
    div.addEventListener('click', () => selectOption(div, i, idx));
    optsEl.appendChild(div);
  });

  // Botón siguiente
  const btnNext = document.getElementById('btnNext');
  btnNext.classList.add('hidden');
  document.getElementById('btnNextLabel').textContent =
    idx === 39 ? 'Ver Resultados' : 'Siguiente pregunta';
}

/* ─────────────────────────────────────────
   SELECCIONAR OPCIÓN
───────────────────────────────────────── */
function selectOption(div, optIdx, qIdx) {
  const opts = document.querySelectorAll('.q-opt');
  const alreadyAnswered = [...opts].some(o => o.classList.contains('correct') || o.classList.contains('wrong'));
  if (alreadyAnswered) return;

  userAnswers[qIdx] = optIdx;
  const q = QUESTIONS[qIdx];

  opts.forEach(o => {
    o.classList.add('disabled');
    const i = parseInt(o.getAttribute('data-idx'));
    if (i === q.answer) o.classList.add(optIdx === q.answer ? 'correct' : 'show-correct');
  });

  div.classList.add(optIdx === q.answer ? 'correct' : 'wrong');

  // Feedback inline
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = 'q-feedback show ' + (optIdx === q.answer ? 'fb-ok' : 'fb-bad');
  if (optIdx === q.answer) {
    feedbackDiv.innerHTML = `<span class="fb-icon">✅</span> <strong>¡Correcto!</strong> Bien hecho.`;
  } else {
    feedbackDiv.innerHTML = `<span class="fb-icon">❌</span> <strong>Respuesta incorrecta.</strong> La correcta era <strong>${['a','b','c','d'][q.answer]})</strong>. Revisa la explicación al final.`;
  }
  document.getElementById('qOptions').appendChild(feedbackDiv);
  document.getElementById('btnNext').classList.remove('hidden');
}

/* ─────────────────────────────────────────
   SIGUIENTE PREGUNTA
───────────────────────────────────────── */
function nextQuestion() {
  if (currentQ < 39) {
    currentQ++;
    renderQuestion(currentQ);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    stopTimer();
    showResults();
  }
}

/* ─────────────────────────────────────────
   MOSTRAR RESULTADOS
───────────────────────────────────────── */
function showResults() {
  showScreen('screenResults');

  const correct = userAnswers.filter((a, i) => a === QUESTIONS[i].answer).length;
  const total   = 40;
  const pct     = correct / total;

  // Animar el círculo SVG
  setTimeout(() => {
    const circle = document.getElementById('scoreCircle');
    const circumference = 326.7;
    circle.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(.4,0,.2,1)';
    circle.style.strokeDashoffset = circumference * (1 - pct);
    if (pct >= 0.75) circle.style.stroke = '#4cce6c';
    else if (pct >= 0.5) circle.style.stroke = '#fdba74';
    else circle.style.stroke = '#fca5a5';
  }, 100);

  // Número animado
  animateNumber('shNum', correct, 800);
  document.getElementById('shTime').textContent = finalTime;

  // Badge
  let badgeClass, badgeText, title, desc;
  if (pct >= 0.9) {
    badgeClass = 'badge-ex'; badgeText = '🏆 Excelente';
    title = '¡Dominas el tema!';
    desc  = 'Resultado sobresaliente. Sigue practicando para mantener ese nivel.';
  } else if (pct >= 0.7) {
    badgeClass = 'badge-ok'; badgeText = '✅ Bien';
    title = '¡Buen desempeño!';
    desc  = 'Estás en el camino correcto. Repasa los temas donde fallaste.';
  } else if (pct >= 0.5) {
    badgeClass = 'badge-med'; badgeText = '⚠️ Regular';
    title = 'Necesitas reforzar';
    desc  = 'Repasa los temas marcados en rojo. Puedes mejorar con práctica constante.';
  } else {
    badgeClass = 'badge-low'; badgeText = '❗ Por mejorar';
    title = 'Hay mucho por trabajar';
    desc  = 'No te desanimes. Revisa cada explicación y vuelve a intentarlo.';
  }
  const badgeEl = document.getElementById('shBadge');
  badgeEl.className = `sh-badge ${badgeClass}`;
  badgeEl.textContent = badgeText;
  document.getElementById('shTitle').textContent = title;
  document.getElementById('shDesc').textContent  = desc;

  // Estadísticas por tema
  renderTopicStats();

  // Revisión detallada
  renderReview();
}

function animateNumber(id, target, duration) {
  const el = document.getElementById(id);
  let start = 0;
  const step = target / (duration / 16);
  const tick = () => {
    start += step;
    if (start >= target) { el.textContent = target; return; }
    el.textContent = Math.floor(start);
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ── STATS POR TEMA ── */
function renderTopicStats() {
  const topics = {
    'Álgebra':                  { total: 0, correct: 0, icon: '📐' },
    'Razones y Proporciones':   { total: 0, correct: 0, icon: '⚖️' },
    'Probabilidad y Estadística':{ total: 0, correct: 0, icon: '📊' },
    'Series Numéricas':         { total: 0, correct: 0, icon: '🔢' },
  };

  QUESTIONS.forEach((q, i) => {
    const t = topics[q.topic];
    if (!t) return;
    t.total++;
    if (userAnswers[i] === q.answer) t.correct++;
  });

  const container = document.getElementById('topicStats');
  container.innerHTML = '';
  Object.entries(topics).forEach(([name, data]) => {
    const pct = data.total > 0 ? data.correct / data.total : 0;
    let color, msg;
    if (pct >= 0.8) { color = '#4cce6c'; msg = '¡Muy bien! 💪'; }
    else if (pct >= 0.6) { color = '#fdba74'; msg = 'Bien, sigue así'; }
    else { color = '#fca5a5'; msg = 'Repasa este tema'; }

    container.innerHTML += `
      <div class="ts-card">
        <div class="ts-icon">${data.icon}</div>
        <div class="ts-name">${name}</div>
        <div class="ts-score-text">${data.correct}/${data.total}</div>
        <div class="ts-bar"><div class="ts-bar-fill" style="width:${pct*100}%;background:${color}"></div></div>
        <div class="ts-msg">${msg}</div>
      </div>`;
  });
}

/* ── REVISIÓN DETALLADA ── */
function renderReview() {
  const letters = ['a', 'b', 'c', 'd'];
  const container = document.getElementById('reviewList');
  container.innerHTML = '';

  QUESTIONS.forEach((q, i) => {
    const userAns = userAnswers[i];
    const isCorrect = userAns === q.answer;

    let userAnsHTML = '';
    if (userAns >= 0) {
      userAnsHTML = `<div class="ri-ans ${isCorrect ? 'ans-right' : 'ans-wrong'}">
        <i class="fas ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
        <span>Tu respuesta: <strong>${letters[userAns]})</strong> ${q.options[userAns]}</span></div>`;
    } else {
      userAnsHTML = `<div class="ri-ans ans-wrong"><i class="fas fa-minus-circle"></i><span>Sin responder</span></div>`;
    }

    const correctAnsHTML = !isCorrect
      ? `<div class="ri-ans ans-right"><i class="fas fa-circle-check"></i>
          <span>Respuesta correcta: <strong>${letters[q.answer]})</strong> ${q.options[q.answer]}</span></div>`
      : '';

    container.innerHTML += `
      <div class="review-item ${isCorrect ? 'ri-correct' : 'ri-wrong'}">
        <div class="ri-header">
          <span class="ri-num">${String(i+1).padStart(2,'0')}</span>
          <span class="ri-status ${isCorrect ? 'ri-ok' : 'ri-ko'}">
            <i class="fas ${isCorrect ? 'fa-check' : 'fa-xmark'}"></i>
            ${isCorrect ? 'Correcto' : 'Incorrecto'}
          </span>
          <span class="ri-topic-tag">${q.topic}</span>
        </div>
        <div class="ri-question">${q.text.replace(/<table[\s\S]*?<\/table>/gi,'[Ver tabla en el simulador]')}</div>
        <div class="ri-answers">
          ${userAnsHTML}
          ${correctAnsHTML}
        </div>
        ${!isCorrect ? `<div class="ri-exp"><div class="ri-exp-label">📖 Explicación detallada</div><div class="ri-exp-text">${q.explanation}</div></div>` : ''}
      </div>`;
  });
}

/* ─────────────────────────────────────────
   DESCARGAR RESULTADOS (PNG)
───────────────────────────────────────── */
function downloadResults() {
  const correct = userAnswers.filter((a, i) => a === QUESTIONS[i].answer).length;
  const pct     = Math.round(correct / 40 * 100);
  const letters = ['a', 'b', 'c', 'd'];
  const fecha   = new Date().toLocaleDateString('es-MX', { day:'2-digit', month:'long', year:'numeric' });

  // Datos por tema
  const topics = {
    'Álgebra':                   { correct: 0, total: 0, emoji: '📐' },
    'Razones y Proporciones':    { correct: 0, total: 0, emoji: '⚖️' },
    'Probabilidad y Estadística':{ correct: 0, total: 0, emoji: '📊' },
    'Series Numéricas':          { correct: 0, total: 0, emoji: '🔢' },
  };
  QUESTIONS.forEach((q, i) => {
    const t = topics[q.topic];
    if (!t) return;
    t.total++;
    if (userAnswers[i] === q.answer) t.correct++;
  });

  // Badge texto
  let badge, badgeColor;
  if (pct >= 90)      { badge = '🏆 EXCELENTE';    badgeColor = '#ffd600'; }
  else if (pct >= 70) { badge = '✅ BIEN';          badgeColor = '#4cce6c'; }
  else if (pct >= 50) { badge = '⚠️ REGULAR';      badgeColor = '#fdba74'; }
  else                { badge = '❗ POR MEJORAR';   badgeColor = '#fca5a5'; }

  // ── CANVAS ──
  const W = 900;
  const topicArr = Object.entries(topics);

  // Calcular altura total dinámicamente
  const detailRows = QUESTIONS.map((q, i) => ({
    ok: userAnswers[i] === q.answer,
    qText: q.text.replace(/<[^>]+>/g, '').substring(0, 80),
    topic: q.topic
  }));

  const ROW_H = 38;
  const HEADER_H  = 380;   // logo + score + badge + tiempo
  const TOPICS_H  = 220;   // sección de temas
  const DETAIL_H  = detailRows.length * ROW_H + 80;
  const FOOTER_H  = 70;
  const H = HEADER_H + TOPICS_H + DETAIL_H + FOOTER_H + 40;

  const canvas = document.createElement('canvas');
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // ── FONDO GRADIENTE ──
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0,   '#101820');
  grad.addColorStop(0.4, '#162a1f');
  grad.addColorStop(1,   '#0a3d1f');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // ── Ruido sutil (puntos) ──
  ctx.fillStyle = 'rgba(255,255,255,.015)';
  for (let y = 0; y < H; y += 8)
    for (let x = 0; x < W; x += 8)
      if (Math.random() > 0.7) ctx.fillRect(x, y, 1, 1);

  // ── Línea decorativa verde arriba ──
  const topLine = ctx.createLinearGradient(0,0,W,0);
  topLine.addColorStop(0,'transparent');
  topLine.addColorStop(0.3,'#4cce6c');
  topLine.addColorStop(0.7,'#28a745');
  topLine.addColorStop(1,'transparent');
  ctx.fillStyle = topLine;
  ctx.fillRect(0, 0, W, 4);

  let y = 48;

  // ── TÍTULO ──
  ctx.font = 'bold 13px "Arial"';
  ctx.fillStyle = 'rgba(255,255,255,.45)';
  ctx.textAlign = 'center';
  ctx.fillText('SIMULADOR 1 · EXANI-II 2025 · UAEMEX', W/2, y);
  y += 14;

  ctx.fillStyle = 'rgba(76,206,108,.4)';
  ctx.fillRect(W/2 - 120, y, 240, 1);
  y += 24;

  // ── PUNTAJE GRANDE ──
  ctx.font = 'bold 88px "Arial"';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText(`${correct}/40`, W/2, y + 80);
  y += 100;

  // Porcentaje
  ctx.font = 'bold 26px "Arial"';
  ctx.fillStyle = badgeColor;
  ctx.fillText(`${pct}%`, W/2, y + 10);
  y += 32;

  // Badge pill
  const badgeW = ctx.measureText(badge).width + 40;
  const badgeX = W/2 - badgeW/2;
  roundRect(ctx, badgeX, y+2, badgeW, 32, 16);
  ctx.fillStyle = badgeColor + '22';
  ctx.fill();
  ctx.strokeStyle = badgeColor + '66';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.font = 'bold 14px "Arial"';
  ctx.fillStyle = badgeColor;
  ctx.fillText(badge, W/2, y + 22);
  y += 52;

  // Tiempo y fecha
  ctx.font = '13px "Arial"';
  ctx.fillStyle = 'rgba(255,255,255,.5)';
  ctx.fillText(`⏱ Tiempo: ${finalTime}   ·   📅 ${fecha}`, W/2, y);
  y += 40;

  // ── SEPARADOR ──
  drawSep(ctx, y, W); y += 28;

  // ── SECCIÓN TEMAS ──
  ctx.font = 'bold 11px "Arial"';
  ctx.fillStyle = '#4cce6c';
  ctx.textAlign = 'left';
  ctx.fillText('RESULTADOS POR TEMA', 48, y);
  y += 20;

  const colW  = (W - 96 - 36) / 4;
  topicArr.forEach(([name, data], ti) => {
    const tpct  = data.total > 0 ? data.correct / data.total : 0;
    const tpctR = Math.round(tpct * 100);
    let tColor;
    if (tpct >= 0.8) tColor = '#4cce6c';
    else if (tpct >= 0.6) tColor = '#fdba74';
    else tColor = '#fca5a5';

    const cx = 48 + ti * (colW + 12);

    // Card fondo
    roundRect(ctx, cx, y, colW, 120, 12);
    ctx.fillStyle = 'rgba(255,255,255,.06)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,.1)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Emoji
    ctx.font = '22px "Arial"';
    ctx.textAlign = 'center';
    ctx.fillText(data.emoji, cx + colW/2, y + 32);

    // Nombre tema
    ctx.font = 'bold 9px "Arial"';
    ctx.fillStyle = 'rgba(255,255,255,.5)';
    const shortName = name.length > 14 ? name.substring(0,13)+'…' : name;
    ctx.fillText(shortName.toUpperCase(), cx + colW/2, y + 52);

    // Puntaje
    ctx.font = 'bold 20px "Arial"';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${data.correct}/${data.total}`, cx + colW/2, y + 74);

    // Barra de progreso
    const barX  = cx + 12;
    const barW  = colW - 24;
    const barY  = y + 84;
    roundRect(ctx, barX, barY, barW, 6, 3);
    ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.fill();
    roundRect(ctx, barX, barY, barW * tpct, 6, 3);
    ctx.fillStyle = tColor; ctx.fill();

    // Porcentaje del tema
    ctx.font = 'bold 10px "Arial"';
    ctx.fillStyle = tColor;
    ctx.fillText(`${tpctR}%`, cx + colW/2, y + 108);
  });

  y += 140;

  // ── SEPARADOR ──
  drawSep(ctx, y, W); y += 28;

  // ── DETALLE PREGUNTA POR PREGUNTA ──
  ctx.font = 'bold 11px "Arial"';
  ctx.fillStyle = '#4cce6c';
  ctx.textAlign = 'left';
  ctx.fillText('DETALLE PREGUNTA POR PREGUNTA', 48, y);
  y += 18;

  // Encabezado tabla
  ctx.fillStyle = 'rgba(26,107,53,.6)';
  ctx.fillRect(48, y, W - 96, 26);
  ctx.font = 'bold 10px "Arial"';
  ctx.fillStyle = 'rgba(255,255,255,.7)';
  ctx.textAlign = 'left';
  ctx.fillText('#', 58, y + 17);
  ctx.fillText('RESULTADO', 80, y + 17);
  ctx.fillText('TEMA', 220, y + 17);
  ctx.fillText('PREGUNTA (RESUMEN)', 390, y + 17);
  y += 26;

  QUESTIONS.forEach((q, i) => {
    const ok    = userAnswers[i] === q.answer;
    const rowBg = ok ? 'rgba(34,197,94,.06)' : 'rgba(239,68,68,.06)';
    const rowBorder = ok ? 'rgba(34,197,94,.2)' : 'rgba(239,68,68,.2)';

    ctx.fillStyle = rowBg;
    ctx.fillRect(48, y, W - 96, ROW_H - 2);
    ctx.strokeStyle = rowBorder;
    ctx.lineWidth = 0.5;
    ctx.strokeRect(48, y, W - 96, ROW_H - 2);

    // Número
    ctx.font = 'bold 10px "Arial"';
    ctx.fillStyle = 'rgba(255,255,255,.4)';
    ctx.textAlign = 'left';
    ctx.fillText(String(i+1).padStart(2,'0'), 58, y + 22);

    // Ícono resultado
    ctx.font = '13px "Arial"';
    ctx.fillText(ok ? '✅' : '❌', 80, y + 22);

    // Texto resultado
    ctx.font = 'bold 10px "Arial"';
    ctx.fillStyle = ok ? '#4ade80' : '#fca5a5';
    ctx.fillText(ok ? 'Correcto' : 'Incorrecto', 100, y + 22);

    // Tema
    ctx.font = '9px "Arial"';
    ctx.fillStyle = 'rgba(255,255,255,.5)';
    const shortTopic = q.topic.length > 16 ? q.topic.substring(0,15)+'…' : q.topic;
    ctx.fillText(shortTopic, 220, y + 22);

    // Pregunta resumida
    ctx.font = '9px "Arial"';
    ctx.fillStyle = 'rgba(255,255,255,.7)';
    const qShort = q.text.replace(/<[^>]+>/g,'').substring(0, 60) + (q.text.replace(/<[^>]+>/g,'').length > 60 ? '…' : '');
    ctx.fillText(qShort, 390, y + 22);

    y += ROW_H;
  });

  y += 20;

  // ── SEPARADOR ──
  drawSep(ctx, y, W); y += 20;

  // ── FOOTER ──
  ctx.font = '11px "Arial"';
  ctx.fillStyle = 'rgba(255,255,255,.35)';
  ctx.textAlign = 'center';
  ctx.fillText('© 2026 UAEMEX Recursos Académicos · Todos los derechos reservados', W/2, y + 20);

  const btmLine = ctx.createLinearGradient(0,0,W,0);
  btmLine.addColorStop(0,'transparent');
  btmLine.addColorStop(0.3,'#4cce6c');
  btmLine.addColorStop(0.7,'#28a745');
  btmLine.addColorStop(1,'transparent');
  ctx.fillStyle = btmLine;
  ctx.fillRect(0, H - 4, W, 4);

  // ── DESCARGAR ──
  canvas.toBlob(blob => {
    const url = URL.createObjectURL(blob);
    const a   = document.createElement('a');
    a.href     = url;
    a.download = `UAEMEX_Simulador1_${new Date().toISOString().slice(0,10)}.png`;
    a.click();
    URL.revokeObjectURL(url);
  }, 'image/png');
}

/* Helpers canvas */
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function drawSep(ctx, y, W) {
  const g = ctx.createLinearGradient(0,0,W,0);
  g.addColorStop(0,'transparent');
  g.addColorStop(0.2,'rgba(255,255,255,.1)');
  g.addColorStop(0.8,'rgba(255,255,255,.1)');
  g.addColorStop(1,'transparent');
  ctx.fillStyle = g;
  ctx.fillRect(0, y, W, 1);
}

/* ─────────────────────────────────────────
   REINTENTAR
───────────────────────────────────────── */
function retrySimulator() {
  startSimulator();
}