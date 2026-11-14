# old -> new (fictional) names for the big-subject mocks; longest keys are applied first. Words are matched on word boundaries.
M={}
def S(s):
    for line in s.strip().split('\n'):
        for pair in line.split(';'):
            if '>' in pair:
                a,b=pair.split('>'); M[a.strip()]=b.strip()
S("""Dong Tian>David Marlow;Tian>Marlow;Fuller>Haverly;Hsia>Okafor;Shapiro>Kessler
Shunichi Kobayashi>Kenji Takeda;Kobayashi>Takeda;Procter>Halbrook;Gamble>Whitcombe
Michael Eng>Peter Lund;Eng>Lund;Michael>Peter
Dayton Manufactured Homes>Ridgeway Prefab Homes;Southern Trust Bank>Northern Harbor Bank;Industrias>Fabricas;Lendex Electronics>Corvane Electronics
Evan Myers>Ethan Pryce;Anwar>Rahmani;Bentley>Hartwell;Matias>Orlov;Wesley>Warren
Annisquam>Pemberly;Sandy>Sarah;Wingaersheek>Ravenwood;Choate Hake>Chester Vane;Hake>Vane;Tangoran>Zelanda
Henrik Ferdinand>Anders Lindqvist;Ferdinand>Lindqvist;Adele Christoph>Elise Brandt;Christophe>Brandt;Christoph>Brandt;Dagmar>Ingrid;Alme>Solheim;Bergenfeld>Rosendal;Elbe>Aldera
Daltonian>Marovian;Daltonia>Marovia;Naim Birol>Nadim Sarkis;Birol>Sarkis;Ziya Pamuk>Zafer Ilgaz;Pamuk>Ilgaz
Gruppo Nebbiolo>Gruppo Sangiove;Nebbiolo>Sangiove;Dolcetto Partners>Grechetto Partners;Diego Moscato>Luca Brunello;Moscato>Brunello;Barolo>Verdello;Turin>Verona
Jean Lapiere>Paul Duvall;Lapiere>Duvall;Jean>Paul;Schwalke>Thornfeld
Second National Bank>Third Coastal Bank
Cannan>Pellham;Sharolyn Ritter>Sheila Rooney;Ritter>Rooney;Delite Beverage>Bravia Beverage;Delite>Bravia;You Fix It>Fix Pro;Fresh Iced Tea Company>Cool Brew Tea Company;Fresh Iced Tea>Cool Brew Tea;Nonutter Soda>Sparko Soda;Nonutter>Sparko;Tasty Root Beer>Hearty Root Beer
Spencer>Lawton;Reed>Hale;Moore>Ames;Atlanta Asset Management>Denver Asset Management;Jennifer Cook>Janet Ward;Cook>Ward;Rossi Asset Management>Marino Asset Management;Rossi>Marino
Akron>Tulsa;Cuyahoga>Brazos
Angelique Kwaza>Anika Mbeki;Kwaza>Mbeki;Samira Khan>Sana Qureshi;Khan>Qureshi;Standard Company>Regent Company;Main Company>Keystone Company
Richard Smith>Robert Ellis;Smith>Ellis;Alpha Company>Orion Company;Beta Company>Vega Company
Gallo>Ferraro;Banco San Bruno>Banco San Carlo
Alison>Alicia;Apex>Zenith;Beast Electronics>Titan Electronics;Beast>Titan
Bianchi>Ferretti;Maneval Investments>Calder Investments;Ayrault>Dumont;Blum>Kessel;Cresson Enterprises>Dalbert Enterprises;Armand Gillette>Louis Garnier;Gillette>Garnier;Raffarin Incorporated>Voisin Incorporated;Raffarin>Voisin
Gosser>Hartung;Jurica>Kordal;Paleotopian>Neolandian;Paleotopia>Neolandia
Davis Spa Days>Hollis Spa Days;Davis>Hollis;Erle Goldsman>Ervin Goldfarb;Goldsman>Goldfarb
Global-Guardian Capital>Summit-Anchor Capital;Guardian Capital>Anchor Capital;Global-Guardian>Summit-Anchor;Jack Richardson>Jim Ruddock;Richardson>Ruddock;Renaissance Clothing>Meridian Clothing;Deluxe Men>Prime Men;Michelle Lee>Monica Yi;Lee>Yi
Kurt Thomas>Karl Tobin;Thomas>Tobin;Peters>Hendry
Hallasan Capital>Baekdu Capital;Hallasan>Baekdu;Gyeongju>Jeonju;Gyeongiu Electric>Jeonju Electric;Gyeongiu>Jeonju;Chung-Hee Kwon>Min-Ho Park;Kwon>Park;Daegu>Gwangju;Gangwon>Chungcheong;Ulsan>Incheon;Cho>Yoon
Coral Bond Management>Opal Bond Management;Alex Sun>Alan Sung;Sundanci>Aldencroft
First Dawn Investment Management>Morning Star Investment Management;Great White North Bank>Great Prairie Bank;Chen>Liang
Dominic Anderson>Daniel Hutchins;Anderson>Hutchins;Martinez>Ortega;Stellar>Radiant
Don Vallejo>Dan Ibarra;Vallejo>Ibarra;Jackson>Wellman;Crispy Chips>Crunchy Chips;Electric Motors>Volt Motors
Jonash International>Karlin International;Jonash>Karlin;Somersault>Cartwheel
Halstead>Ashgrove;Charles Scott>Chad Stone;Catherine Bird>Claire Finch;Bird>Finch;Scott>Stone
Paulinic>Valdric;Vermillion Insurance>Scarlet Insurance;Vermillion>Scarlet;Cobalt Life Insurance>Indigo Life Insurance;Cobalt>Indigo
Smithson>Hartigan;Williams Industries>Barlow Industries
Nabil Salah>Nasir Qadri;Lisa Suarez>Laura Ibanez;Salah>Qadri;Suarez>Ibanez;Klopp>Fenwick;Nashville>Louisville;Tennessee>Kentucky
Quantum Credit Advisers>Vertex Credit Advisers;Quantum>Vertex;Rutherford>Whitlock;Diana Coombs>Dora Kemp;Coombs>Kemp;David Wu>Dennis Hsu
Risso>Bellini;Centralino>Corsaro;Brinaregalo>Trovata;Camporio>Lazzeri;Esperto>Veloce;Fornodissione>Cantiere;Radoresto>Sabbiolo
Eckle>Ahlgren;Priore>Montrose;Brian Bregen>Brent Haldane;Bregen>Haldane;Apollo>Helios;Webster>Dalton;Levrom>Corbin;Hamsco>Tarvell
Yusuf>Hakim;John Cerra>Joel Cardin;Cerra>Cardin;Eunice Quek>Elaine Tay;Quek>Tay;Inderjit Singh>Ishan Rao;Singh>Rao
Schmidt>Berger;Sean>Seth;Leary>Hanlon
Dodd>Mercer;Upsilon Advisers>Omega Advisers;Sonya>Sonia;Construction Supply>Builders Supply;Dynamic Production>Vector Production
Withers>Pruitt;Ukon>Orlan;Venus Company>Hermes Company;Wakuni>Tamaru;Xavier Corporation>Zander Corporation""")
import re
_keys=sorted(M,key=len,reverse=True)
_re=re.compile(r'(?<![A-Za-z])('+'|'.join(re.escape(k) for k in _keys)+r')(?![A-Za-z])')
def rename(t): return _re.sub(lambda m:M[m.group(1)],t)
