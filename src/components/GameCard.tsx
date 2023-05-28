import { Game } from "../hooks/useGames.ts";
import {
  Card,
  CardBody,
  chakra,
  Heading,
  HStack,
  Image,
} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList.tsx";
import CriticStore from "../hooks/CriticStore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
  game: Game;
}
function GameCard({ game }: Props) {
  const HoverableCard = chakra(Card, {
    baseStyle: {
      transition: "transform .3s ease",
      _hover: {
        transform: "scale(1.05)",
      },
    },
  });
  return (
    <>
      <HoverableCard>
        <Card
          borderRadius={8}
          overflow="hidden"
          alignItems="center"
          justifyContent="center"
          variant="filled"
        >
          <Image src={getCroppedImageUrl(game.background_image)} />
          <CardBody textAlign="center">
            <Heading fontSize="2xl">{game.name}</Heading>
            <HStack justifyContent="space-between">
              <PlatformIconsList
                platforms={game.parent_platforms.map((p) => p.platform)}
              />
              <CriticStore score={game.metacritic} />
            </HStack>
          </CardBody>
        </Card>
      </HoverableCard>
    </>
  );
}

export default GameCard;
