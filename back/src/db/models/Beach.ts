import { BeachModel, IBeach } from "../schemas/beachSchema";
import { Types } from "mongoose";
import { BeachData } from "beach";

async function BeachByBeachId(_id: Types.ObjectId): Promise<IBeach[]> {
  const getBeaches = await BeachModel.findOne({ _id : _id }) as IBeach[];
  return getBeaches;
}

async function BeachByRegionAndYear(address: string, year: string): Promise<IBeach[]> {
  const getBeaches = await BeachModel.find({ address: address, year: year }) as IBeach[]; // 주소와 연도로 찾기
  return getBeaches;
}

async function BeachByRegionAndYearSpecific(year: string): Promise<BeachData> {
  const query: any = { year: year };
  const getBeaches = await BeachModel.find(query) as IBeach[];
  const regions = ['강원', '경남', '경북', '인천', '울산', '부산', '전남', '전북', '제주', '충남'];

  const modifiedBeaches: BeachData = {
    [year]: []
  };

  for (const region of regions) {
    const matchingBeach = getBeaches.find(beach => beach.address === region);
    if (matchingBeach) {
      modifiedBeaches[year].push({
        esch: matchingBeach.esch || 0,
        ente: matchingBeach.ente || 0
      });
    } else {
      modifiedBeaches[year].push({
        esch: 0,
        ente: 0
      });
    }
  }

  return modifiedBeaches;
}


async function Beaches(): Promise<IBeach[]> {
  const getBeaches = await BeachModel.find({}) as IBeach[];
  return getBeaches;
}

export { BeachByBeachId, BeachByRegionAndYear, BeachByRegionAndYearSpecific, Beaches };
