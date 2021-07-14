import React from "react";
import { CompleteText } from "components/CompleteText";
import { Entry } from "components/Entry";
import { Sequence } from "components/Sequence";
import { Text } from "components/Text";

/**
 * – WOHIN? WO? WOHER?
 *
 * Länder ohne Artikel und Städte – nach, in, aus.
 * z. B. Berlin, Paris, Damaskus, Österreich, Deutschland, Frankreich, Syrien.
 *
 * Länder mit Artikel - in, aus.
 * z. B. Türkei, Schweiz, Ukraine, Mongolei, Slowakei,
 * Iran, Sudan, Kongo, Libanon, Vatikan, Irak, USA, Niederlande, VAE.
 *
 * Räume – in, aus
 * z. B. Zimmer, Kino, Restaurant, Museum, Büro, Café, Theater.
 *
 * Inseln, Plätze und Feste – auf, von.
 * z. B. Bahamas, Philippinen, Seychellen, Markt, Platz, Party, Hochzei
 *
 * Personen, Aktionen und Stationen – zu, bei, von
 * z. B. Arbeit, Essen, Sport, Yoga, Oper, Bushaltestelle, Zahnarzt, Friseurin
 *
 * Meine Wohnung – deine Wohnung – nach, zu, von, bei
 * z. B.
 *  | Wohin gehst du?     | Wo bist du?        | Woher kommst du?   |
 *  +---------------------+--------------------+--------------------+
 *  | nach Hause          | zu Hause           | von zu Hause       |
 *  | zu dir (nach Hause) | bei dir (zu Hause) | von dir (zu Hause) |
 *
 * Bahnhof und Flughafen – zu, an, von.
 * z. B. Bahnhof, Flughafen
 */

export const LocalPrepositions = [
  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        A: Was kann man eigentlich <Entry value="im" autoFocus /> Kongo machen?
      </Text>
    </CompleteText>

    <CompleteText>
      <Text>
        B: <Entry value="Im" autoFocus upperFirst /> Kongo kann man viele
        Nationalparks besuchen. Möchtest du gerne <Entry value="in den" /> Kongo
        fliegen?
      </Text>
      <Text>A: Vielleicht☺</Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        A: Was denkst du? Sollte ich meine nächste Reise{" "}
        <Entry value="nach" autoFocus /> Frankreich oder{" "}
        <Entry value="in die" /> französische Schweiz machen?
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        B: Ich würde lieber <Entry value="in der" autoFocus /> französischen
        Schweiz sein. Genf gefällt mir am besten.
      </Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        A: Ich komme gerade <Entry value="aus dem" autoFocus /> Restaurant um
        die Ecke und hab dir etwas Köstliches mitgebracht, Schatz.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        B: Was? Du warst <Entry value="im" autoFocus /> Restaurant ohne mich?
      </Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        A: Warst du schon einmal <Entry value="in den" autoFocus /> USA oder{" "}
        <Entry value="im" /> Libanon?
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        B: Wieso stellst du so eine Frage? Das sind wirklich sehr verschiedene
        Länder.
      </Text>
      <Text>
        A: Ich würde gerne sowohl <Entry value="in die" autoFocus /> USA als
        auch <Entry value="in den" /> Libanon reisen und brauche deinen Rat.
      </Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <CompleteText>
    <Text>
      A: Hey, nächste Woche besuche ich den Papst persönlich{" "}
      <Entry value="im" autoFocus /> Vatikan. Kommst du mit?
    </Text>
    <Text>B: Nein danke, ich bin evangelisch;)</Text>
  </CompleteText>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>A: Woher kommt Jana nochmal?</Text>

      <Text>
        B: Ich denke sie kommt <Entry value="aus dem" autoFocus /> Iran, oder?
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        C: Nein, sie kommt <Entry value="aus" autoFocus /> Österreich, aber ihr
        Vater ist Perser
      </Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        A: <Entry value="In den" autoFocus upperFirst /> Niederlanden gibt es
        die schönsten Tulpen
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        B: Ja das habe ich auch gehört.
        <br />
        Ist Peter letztes Jahr nicht wegen der schönen Tulpenfelder{" "}
        <Entry value="in die" autoFocus /> Niederlande gefahren?
      </Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        A: Schatz musst du heute wirklich noch <Entry value="ins" autoFocus />{" "}
        Büro fahren? Es ist Wochenende.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        B: Ja unbedingt. Ich habe meinen Computer{" "}
        <Entry value="in der" autoFocus /> Firma vergessen.
      </Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        A: Benno will überhaupt nicht <Entry value="ins" autoFocus />{" "}
        Kindermuseum gehen. Ich weiß nicht, was mit ihm los ist.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        B: Das ist aber eigenartig. Er liebt es normalerweise,{" "}
        <Entry value="im" autoFocus /> Kindermuseum zu sein.
      </Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>A: Wo treffen wir uns jetzt?</Text>
      <Text>
        B: <Entry value="Im" autoFocus upperFirst /> Café Ritter. Das ist gleich
        bei dir um die Ecke.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        A: Lustig, ich komme gerade <Entry value="aus dem" autoFocus /> Café
        Ritter. Dann gehe ich wieder zurück
        <Entry value="ins" /> Café und warte hier auf dich.
      </Text>
      <Text>B: Perfekt, bis gleich.</Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        A: Was würdest du <Entry value="auf eine" autoFocus /> einsame Insel
        mitnehmen?
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>B: Wie einsam ist die Insel?</Text>
      <Text>
        A: Was meinst du denn jetzt mit dieser Frage? Einsam eben.
        <Entry value="Auf den" autoFocus upperFirst /> Seychellen z.B gibt es
        auch sehr einsame Plätze. Aber die Inselgruppe ist prinzipiell bewohnt.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        A: Ich will dich ja nicht <Entry value="auf die" autoFocus /> Seychellen
        schicken. <br /> Nein, eine einsame, unbekannte Insel. Die berühmten
        drei Dinge.
      </Text>
      <Text>B: Dort würde ich niemals hinfliegen!</Text>
      <Text>A: Ach mit dir macht das keinen Spaß.</Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        A: Du bist ja schick angezogen.{" "}
        <Entry value="Auf der" autoFocus upperFirst /> Studentenparty warst du
        wohl nicht oder?
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        B: Nein, ich komme gerade <Entry value="von" autoFocus /> Marias
        Hochzeit. Mir war so schrecklich langweilig. Normalerweise tanzt man{" "}
        <Entry value="auf den" /> Hochzeiten und es gibt Musik – eine Band oder
        einen DJ. Aber nein, nichts.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        A: Tja, Pech gehabt. Komm mit mir <Entry value="auf die" autoFocus />{" "}
        Party von Josef. Dort gibt es zumindest eine super Spotify Playlist,
        hehe. Die Nacht ist noch jung! ☺
      </Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>Mein gestriger Tag:</Text>
      <Text>
        Gestern bin ich sehr früh aufgestanden, weil ich um 7:30 schon{" "}
        <Entry value="zum" autoFocus /> Yoga gegangen bin. Danach bin ich
        natürlich gleich <Entry value="zur" /> Arbeit gegangen.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        Es war ein wirklich stressiger Tag gestern aber nichtsdestotrotz bin ich
        nach der Arbeit noch <Entry value="zu" autoFocus /> Maria{" "}
        <Entry value="nach" /> Hause gefahren. Maria hat nämlich gerade großen
        Liebeskummer und braucht meine Schulter zum Ausweinen.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        Wir sind gerade <Entry value="beim" autoFocus /> Essen gewesen, als
        plötzlich Klaus, ihr Exfreund, vor der Tür stand.
      </Text>
      <Text>
        Er ist sichtlich gerade
        <Entry value="vom" /> Sport gekommen, wie er da so dastand – im
        Trainingsanzug und ganz verschwitzt.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        „Maria“ sagte er, „bitte nimm mich zurück.“ Ich gehe auch so oft mit dir{" "}
        <Entry value="zum" autoFocus /> Sport, wie du willst!“ Ich habe mich von
        ihnen verabschiedet und bin <Entry value="nach" /> Hause gegangen. Das
        war mir wirklich alles zu kindisch.
      </Text>
    </CompleteText>
  </Sequence>,

  // eslint-disable-next-line react/jsx-key
  <Sequence>
    <CompleteText>
      <Text>
        Bitte hol mich <Entry value="am" autoFocus /> Bahnhof ab.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        Ich bin schon <Entry value="am" autoFocus /> Flughafen. Was auch immer
        du sagen möchtest – es ist zu spät.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        Ich fahre mit dem Zug <Entry value="zum" autoFocus /> Flughafen.
      </Text>
    </CompleteText>
    <CompleteText>
      <Text>
        Wo ist er? – Er ist doch schon <Entry value="am" autoFocus /> Bahnhof.
      </Text>
    </CompleteText>
  </Sequence>,

  // <Text>
  //   Ordne zu und wähle den passenden Artikel vorerst im Nominativ (Manchmal sind
  //   zwei Präpositionen möglich).
  //   <br />
  //   An, Auf, In
  //   <br />
  //   <Entry value="an" /> der Strand
  //   <br />
  //   <Entry value="auf" /> der Berg
  //   <br />
  //   <Entry value="in" /> der See (lake), die See (sea)
  //   <br />
  //   <Entry value="in" /> der Wald
  //   <br />
  //   <Entry value="in" /> das Dorf
  //   <br />
  //   <Entry value="auf" /> der Hügel
  //   <br />
  //   <Entry value="an" /> das Ufer
  //   <br />
  //   <Entry value="in" /> das Meer
  //   <br />
  //   <Entry value="an" /> der Fluss
  //   <br />
  //   <Entry value="auf" /> die Wiese
  //   <br />
  //   <Entry value="an" /> die Berge (pl)
  //   <br />
  //   <Entry value="auf" /> das Land
  //   <br />
  //   <Entry value="an" /> die Küste
  //   <br />
  //   <Entry value="in" /> die Wüste
  //   <br />
  //   <Entry value="auf" /> die Ostsee
  //   <br />
  //   <Entry value="in" /> Norden
  //   <br />
  //   <Entry value="in" /> Ort
  //   <br />
  // </Text>,
];
