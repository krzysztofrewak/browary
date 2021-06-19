<template>
  <div class="about">
    <page-header title="O co chodzi?" header="Kilka słów o projekcie"></page-header>
    <p class="my-4 px-6 text-sm text-gray-900">
      Nazywam się Krzysztof Rewak i wraz z moją żoną Joanną od kilku lat staramy się podczas naszych podróży odwiedzać napotkane browary. Pasją zaraził nas nasz kolega Marcin, z którym zjechaliśmy kilkanaście czeskich i niemieckich mikrobrowarów; my natomiast nauczyliśmy tego hobby kilkoro naszych innych znajomych.
    </p>
    <p class="my-4 px-6 text-sm text-gray-900">
      Głównym celem niniejszej strony jest archiwizacja naszych podróży oraz budowanie ładnie namalowanych statystyk. Kod aplikacji jest otwartoźródłowy, więc każdy chętny może zbudować podobną mapę przy odrobinie dobrych chęci i wiedzy programistycznej.
    </p>
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'

export default {
  components: { PageHeader }
}
</script>
